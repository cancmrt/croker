import { CrokerCrawler } from "../../web-crawlers/CrokerCrawler";
import { CrokerJobs } from "../../jobs-base/CrokerJobs";
import { Jobs, PrismaClient } from '../../prisma-client';

export class BistStaticValueGetter extends CrokerJobs{
    
    public Name: string = "BIST Daily Values Getter";
    public ExecuterClass = "BistStaticValueGetter";
    public ExecuteCronTime = "00 19 * * 1-6";
    public Version = "1.0.0";
    

    public async Install(Job:Jobs)  {
        await this.AddParam("URL","https://www.finnet.com.tr/f2000/endeks/EndeksAnaliz.aspx")
        await this.AddParam("HttpMethod","GET")
    }

    public async Run(BaseJob:CrokerJobs) {
        
        let crawler:CrokerCrawler = new CrokerCrawler();
        let result = await crawler.AutoJobParamLoader(BaseJob.Job);
        if (result.IsError == true){
            throw Error(result.Error);
        }
        let $ = result.Document

        let FKBaslikIndex = $(".ozetbaslikkbaslik").toArray().findIndex(el => crawler.RemoveTagAndWhiteSpaces($(el).text()) == "F/K");
        let PDDDBaslikIndex = $(".ozetbaslikkbaslik").toArray().findIndex(el => crawler.RemoveTagAndWhiteSpaces($(el).text()) == "PD/DD");


        let ValuesArray = $(".ozetbaslikdata").toArray()
        let FKValue = Number(crawler.RemoveTagAndWhiteSpaces($(ValuesArray[FKBaslikIndex]).find("span").text()));
        let PDDDValue = Number(crawler.RemoveTagAndWhiteSpaces($(ValuesArray[PDDDBaslikIndex]).find("span").text()));

        await this.AddValue("F/K",FKValue.toLocaleString("tr-TR"),new Date());
        await this.AddValue("PD/DD",PDDDValue.toLocaleString("tr-TR"),new Date());
        
    }
    public async Completed(BaseJob:CrokerJobs){
        console.log("completed");
    }

}