import { PrismaClient } from "../prisma-client";

export class JobsRunner{

    private Client:PrismaClient

    constructor(){
        this.Client = new PrismaClient();
    }

    public async LoadAllJobs(){
        let allJobs = await this.Client.jobs.findMany({
            where:{
                AND:{
                    IsActive:{
                        equals:true
                    },
                    IsDeleted:{
                        equals:false
                    },
                }
            }
        });

        for await (const job of allJobs) {
            let jobClass = await import("../jobs/"+job.ExecuterClass+"/"+job.ExecuterClass);
            let createdClass = new jobClass[job.ExecuterClass]();
            await createdClass.Start();
            global.InitializedCrokerJobs.push(createdClass);
        };

    }

}