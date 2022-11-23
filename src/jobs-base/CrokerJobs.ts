
import { Jobs, Prisma, PrismaClient } from '../prisma-client'
import { CronJob } from 'cron';
import { JobsLogger } from './JobsLogger';


export abstract class CrokerJobs{

    public abstract Name:string
    public abstract ExecuterClass:string
    public abstract ExecuteCronTime:string
    public abstract Version:string


    private Client:PrismaClient | undefined;
    private CrokerCronJob:CronJob | undefined;

    private jobsWithParams = Prisma.validator<Prisma.JobsArgs>()({
        include: { Params: true },
    });
    public Job:Prisma.JobsGetPayload<typeof this.jobsWithParams> | undefined;

    constructor(){
        this.Client = new PrismaClient();
    }

    public async SystemInstaller(){
        await this.Client?.$connect();
        let jobFinded = await this.Client?.jobs.findFirst({
            where:{
                AND:{
                    Name:{
                        equals: this.Name
                    },
                    IsDeleted:{
                        equals: false
                    }
                }
                
            },
            include:{
                Params:true
            }
        });
        await this.Client?.$disconnect();
        if(jobFinded == undefined){
            
            try{
                await this.Client?.$connect();
                let createdJob = await this.Client?.jobs.create({
                    data:{
                        Name: this.Name,
                        ExecuterClass: this.ExecuterClass,
                        ExecuteCronTime: this.ExecuteCronTime,
                        Version: this.Version,
                        IsActive:true,
                        IsRunningNow:false,
                        IsDeleted:false
                    }
                });
                await this.Client?.$disconnect();
                if(createdJob === undefined){
                    throw Error("Job database seviyesinde yaratılamadı...");
                }
                await JobsLogger.Info(this.Name,"Job "+this.Name+" Version: "+this.Version+" pre-installation successfully");
                await this.Install(createdJob);
                await JobsLogger.Info(this.Name,"Job "+this.Name+" Version: "+this.Version+" installed greacfully");
            }
            catch(ex){
                throw Error("Job yaratılırken bir sorun oluştu"+JSON.stringify(ex));
            }
            
        }
        else{
            if(jobFinded.Version !== this.Version || jobFinded.ExecuterClass !== this.ExecuterClass){
                await JobsLogger.Info(this.Name,"Job "+this.Name+" old version detected");
                try{
                    await this.Install(jobFinded);
                    await this.Client?.$connect();
                    await this.Client?.jobs.update({
                        where: {
                            Id: jobFinded?.Id
                        },
                        data: {
                            ExecuterClass: this.ExecuterClass,
                            ExecuteCronTime: this.ExecuteCronTime,
                            Version: this.Version

                        },
                    });
                    await this.Client?.$disconnect();
                    await JobsLogger.Info(this.Name,"Job "+this.Name+" new version installed greacfully");
                }
                catch(ex){
                    await JobsLogger.Error(this.Name,JSON.stringify(ex));
                }

            }

        }
        
    }

    private async Init() {
        await this.Client?.$connect();
        this.Job = await this.Client?.jobs.findFirstOrThrow({
            where:{
                Name:{
                    equals: this.Name
                }
            },
            include:{
                Params:true
            }
        });
        await this.Client?.$disconnect();
    }

    public async AddParam(Name:string,Value:string){
        await this.Client?.$connect();
        let findedJob = await this.Client?.jobs.findFirstOrThrow({
            where:{
                Name:{
                    equals: this.Name
                }
            },
            include:{
                Params:true
            }
        });
        await this.Client?.jobParams.create({
            data:{
                Name:Name,
                Value:Value,
                IsDeleted: false,
                JobId:findedJob?.Id || 0
            }
        });
        await this.Client?.$disconnect();
        
    }
    public async RemoveParam(Name:string){
        await this.Client?.$connect();
        let findedJob = await this.Client?.jobs.findFirstOrThrow({
            where:{
                Name:{
                    equals: this.Name
                }
            },
            include:{
                Params:true
            }
        });
        let findedParam = await this.Client?.jobParams.findFirstOrThrow({
            where:{
                AND:{
                    Name:{
                        equals: Name
                    },
                    JobId:{
                        equals:findedJob?.Id
                    }
                }
                
            }
        });
        await this.Client?.jobParams.update({
            where: {
              Id: findedParam?.Id
            },
            data: {
              IsDeleted:true
            },
        });
        await this.Client?.$disconnect();
    }

    public async Start(){

        await this.Init();
        if(this.Job !== undefined){
            await JobsLogger.Info(this.Job.Name,"Job " + this.Job?.Name + " Started...")
            if(this.CrokerCronJob === undefined){
                this.CrokerCronJob = new CronJob(this.Job.ExecuteCronTime,
                async () => {

                    await this.Client?.$connect();
                    await this.Client?.jobs.update({
                        where: {
                          Id: this.Job?.Id
                        },
                        data: {
                          IsRunningNow:true
                        },
                    });
                    await this.Client?.$disconnect();
                    await JobsLogger.Info(this.Job?.Name || "","Job " + this.Job?.Name + " Run Start...")
                    
                    try{
                        this.Run(this);
                        await JobsLogger.Info(this.Job?.Name || "","Job " + this.Job?.Name + " Run End...")
                        
                    }
                    catch(ex){
                        await JobsLogger.Error(this.Job?.Name || "",JSON.stringify(ex))
                    }
                    
                    await this.Client?.$connect();
                    await this.Client?.jobs.update({
                        where: {
                          Id: this.Job?.Id
                        },
                        data: {
                          IsRunningNow:false
                        },
                    });
                    await this.Client?.$disconnect();
                },async () => {
                    this.Completed(this);
                    await JobsLogger.Info(this.Job?.Name || "","Job " + this.Job?.Name + " End Greacfully")
                });
            }
            this.CrokerCronJob.start();
        }
        else{
            throw Error("Bulunamayan job başlatılamaz");
        }
        
    }

    public async Stop(){
        if(this.CrokerCronJob !== undefined){
            if(this.Job !== undefined){
                await this.Client?.$connect();
                await this.Client?.jobs.update({
                    where: {
                      Id: this.Job?.Id
                    },
                    data: {
                      IsRunningNow:false
                    },
                });
                await this.Client?.$disconnect();
                await JobsLogger.Info(this.Job?.Name || "","Job " + this.Job?.Name + " Stopped...")
            }
            this.CrokerCronJob?.stop();
        }
        else{
            throw Error("Bulunamayan job durdurulamaz");
        }
    }
    public abstract Install(Job:Jobs): Promise<void>;
    public abstract Run(BaseJob:CrokerJobs): Promise<void>;
    public abstract Completed(BaseJob:CrokerJobs): Promise<void>;


}