import { CrokerCrawler } from "../../web-crawlers/CrokerCrawler";
import { CrokerJobs } from "../CrokerJobs";
import { PrismaClient } from '../../prisma-client';

export class ZiraatFaizValueGetter extends CrokerJobs{


    constructor(JobName:string){
        super(JobName);
    }
    public async Run(BaseJob:CrokerJobs) {
        
        let crawler:CrokerCrawler = new CrokerCrawler();
        let result = await crawler.AutoJobParamLoader(BaseJob.Job);
        if (result.IsError == true){
            throw Error(result.Error);
        }
        let $ = result.Document

        let FindedFaiz =$('*[data-id="rdIntBranchVadeliTL"] table tbody').html();
        let aa = FindedFaiz;

    }
    public async Completed(BaseJob:CrokerJobs){
        console.log("completed");
    }

}