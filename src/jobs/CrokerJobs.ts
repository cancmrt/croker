
import { Prisma,PrismaClient } from '../prisma-client'

export abstract class CrokerJobs{

    private Client:PrismaClient;
    private Name:String;
    public Job:Prisma.JobsGetPayload<{ include: { Params: true; }; }> | undefined;

    constructor(JobName:String){
        this.Name = JobName;
        this.Client = new PrismaClient();
        this.Client.jobs.findFirst({})
    }

    private Init(){
        
    }


}