
import { Prisma, PrismaClient } from '../prisma-client'
import { CronJob } from 'cron';

export abstract class CrokerJobs{

    private Client:PrismaClient | undefined;
    private Name:string;
    private CrokerCronJob:CronJob | undefined;

    private jobsWithParams = Prisma.validator<Prisma.JobsArgs>()({
        include: { Params: true },
    });
    public Job:Prisma.JobsGetPayload<typeof this.jobsWithParams> | undefined;

    constructor(JobName:string){
        this.Name = JobName;
    }
    
    private async Init() {
        this.Client = new PrismaClient();
        await this.Client.$connect();
        this.Job = await this.Client.jobs.findFirstOrThrow({
            where:{
                Name:{
                    equals: this.Name
                }
            },
            include:{
                Params:true
            }
        });
        await this.Client.$disconnect();
    }
    public async Start(){

        await this.Init();
        if(this.Job !== undefined){
            
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
                    this.Run(this);
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
            }
            this.CrokerCronJob?.stop();
        }
        else{
            throw Error("Bulunamayan job durdurulamaz");
        }
    }

    public abstract Run(BaseJob:CrokerJobs): Promise<void>;
    public abstract Completed(BaseJob:CrokerJobs): Promise<void>;


}