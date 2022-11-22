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

        allJobs.forEach((job)=>{
            import("./croker-jobs/"+job.ExecuterClass)
            .then(jobClass => {
                let createdClass = new jobClass[job.ExecuterClass](job.Name);
                createdClass.Start();
            })
            .catch(err => {
                console.log(err);
            });
            
        });
    }

}