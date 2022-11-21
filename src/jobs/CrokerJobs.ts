
import { Jobs, PrismaClient } from '../prisma-client'
import { CronCommand, CronJob } from 'cron';

export abstract class CrokerJobs{

    private Client:PrismaClient;
    private Name:string;
    private CrokerCronJob:CronJob | undefined;
    public Job:Jobs | null;

    constructor(JobName:string){
        this.Name = JobName;
        this.Client = new PrismaClient();
        this.Job = null;
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

        if(this.Job !== null){
            this.CrokerCronJob = new CronJob(this.Job.ExecuteCronTime,this.Run,this.Completed);
        }
        
    }

    public Stop(){
        if(this.CrokerCronJob !== null){
            this.CrokerCronJob?.stop();
        }
    }

    public abstract Run: CronCommand;
    public abstract Completed: CronCommand;


}