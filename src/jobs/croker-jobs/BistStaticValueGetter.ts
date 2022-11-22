import { CrokerCrawler } from "../../web-crawlers/CrokerCrawler";
import { CrokerJobs } from "../CrokerJobs";
import { PrismaClient } from '../../prisma-client';

export class BistStaticValueGetter extends CrokerJobs{


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

        let FKBaslikIndex = $(".ozetbaslikkbaslik").toArray().findIndex(el => crawler.RemoveTagAndWhiteSpaces($(el).text()) == "F/K");
        let PDDDBaslikIndex = $(".ozetbaslikkbaslik").toArray().findIndex(el => crawler.RemoveTagAndWhiteSpaces($(el).text()) == "PD/DD");


        let ValuesArray = $(".ozetbaslikdata").toArray()
        let FKValue = crawler.RemoveTagAndWhiteSpaces($(ValuesArray[FKBaslikIndex]).find("span").text());
        let PDDDValue = crawler.RemoveTagAndWhiteSpaces($(ValuesArray[PDDDBaslikIndex]).find("span").text());

        let client = new PrismaClient();
        await client.$connect();
        let SelectedVault = await client.vaultType.findFirstOrThrow({
            where:{
                Name:{
                    equals: "BIST100"
                }
            }
        });
        
        await client.vaultValues.create({
            data:{
                Name:"F/K",
                DateOfValue: new Date(),
                VaultTypeId: SelectedVault.Id,
                Value:FKValue

            }
        });
        await client.vaultValues.create({
            data:{
                Name:"PD/DD",
                DateOfValue: new Date(),
                VaultTypeId: SelectedVault.Id,
                Value:PDDDValue

            }
        });
        await client.$disconnect();

    }
    public async Completed(BaseJob:CrokerJobs){
        console.log("completed");
    }

}