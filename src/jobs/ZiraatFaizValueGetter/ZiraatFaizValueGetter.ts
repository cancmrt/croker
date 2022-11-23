import { CrokerCrawler } from "../../web-crawlers/CrokerCrawler";
import { CrokerJobs } from "../../jobs-base/CrokerJobs";
import { Jobs, PrismaClient } from '../../prisma-client';

export class ZiraatFaizValueGetter extends CrokerJobs{

    public Name = "Ziraat Daily Faiz Values Getter";
    public ExecuterClass = "ZiraatFaizValueGetter";
    public ExecuteCronTime = "* * * * * *";
    public Version = "1.0.0";
    
    public async Install(Job:Jobs){
        this.AddParam("URL","https://www.ziraatbank.com.tr/tr/fiyatlar-ve-oranlar")
        this.AddParam("HttpMethod","GET")
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