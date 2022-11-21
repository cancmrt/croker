
import { Jobs, Prisma, PrismaClient } from '../prisma-client'
import { CronJob } from 'cron';

export abstract class CrokerJobs{

    private Client:PrismaClient;
    private Name:string;
    private CrokerCronJob:CronJob | undefined;
    private jobsWithParams = Prisma.validator<Prisma.JobsArgs>()({
        include: { Params: true },
    });
    public Job:Prisma.JobsGetPayload<typeof this.jobsWithParams> | undefined;

    constructor(JobName:string){
        this.Name = JobName;
        this.Client = new PrismaClient();
        this.JobAssigner();
    }

    private async JobAssigner(){
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
    }
    private InitJobSchedular(){

    }

    public Start(){

        if(this.Job !== undefined){
            if(this.CrokerCronJob === undefined){
                this.CrokerCronJob = new CronJob(this.Job.ExecuteCronTime,this.Run,this.Completed);
            }
            this.CrokerCronJob.start();
        }
        else{
            throw Error("Bulunamayan job başlatılamaz");
        }
        
    }

    public Stop(){
        if(this.CrokerCronJob !== null){
            this.CrokerCronJob?.stop();
        }
        else{
            throw Error("Bulunamayan job durdurulamaz");
        }
    }

    public abstract Run(): Promise<void>;
    public abstract Completed(): Promise<void>;


}