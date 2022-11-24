import { CrokerCrawler } from "../../web-crawlers/CrokerCrawler";
import { CrokerJobs } from "../../jobs-base/CrokerJobs";
import { Jobs, PrismaClient } from '../../prisma-client';

export class ZiraatFaizValueGetter extends CrokerJobs{

    public Name = "Ziraat Daily Faiz Values Getter";
    public ExecuterClass = "ZiraatFaizValueGetter";
    public ExecuteCronTime = "00 19 * * 1-6";
    public Version = "1.0.0";
    
    public async Install(Job:Jobs){
        await this.AddParam("URL","https://www.ziraatbank.com.tr/tr/fiyatlar-ve-oranlar")
        await this.AddParam("HttpMethod","GET")
    }

    public async Run(BaseJob:CrokerJobs) {
        
        let crawler:CrokerCrawler = new CrokerCrawler();
        let result = await crawler.AutoJobParamLoader(BaseJob.Job);
        if (result.IsError == true){
            throw Error(result.Error);
        }
        let $ = result.Document

        let MainTableForFaiz = $('*[data-id="rdIntBranchVadeliTL"] table tbody tr');
        let FaizValueIndex = $(MainTableForFaiz).find("td:nth-child(1)").toArray().findIndex(el => crawler.RemoveTagAndWhiteSpaces($(el).text()) == "30 - 31 gün arası");
        let FaizValueEl = $(MainTableForFaiz).find("td:nth-child(2)").toArray()[FaizValueIndex];
        let FaizValue = crawler.RemoveTagAndWhiteSpaces($(FaizValueEl).text()).replaceAll("%","").replaceAll(",",".");
        let FaizValueNumber = Number(FaizValue);
        await this.AddValue("Faiz",FaizValueNumber.toLocaleString("tr-TR"),new Date());
        await this.AddValue("Baz-Faiz",(100 / (100 * (FaizValueNumber/100))).toLocaleString("tr-TR"),new Date());

    }
    public async Completed(BaseJob:CrokerJobs){
        console.log("completed");
    }

}