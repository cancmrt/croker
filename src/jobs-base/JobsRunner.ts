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
            import("../jobs/"+job.ExecuterClass+"/"+job.ExecuterClass)
            .then(async jobClass => {
                let createdClass = new jobClass[job.ExecuterClass](job.Name);
                await createdClass.Start();
                global.InitializedCrokerJobs.push(createdClass);
            })
            .catch(err => {
                console.log(err);
            });
            
        });
    }

}