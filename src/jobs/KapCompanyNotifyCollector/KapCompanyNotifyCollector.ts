import axios from "axios";
import { CrokerJobs } from "../../jobs-base/CrokerJobs";
import { Jobs, PrismaClient } from "../../prisma-client";
import { BISTCompany } from "../OyakBistCompanyGetter/OyakBistCompanyGetter";
import moment from 'moment';

export class KapCompanyNotifyCollector extends CrokerJobs{
    public Name: string = "KAP Company Notify Collector";
    public ExecuterClass: string = "KapCompanyNotifyCollector";
    public ExecuteCronTime: string = "* * * * *"
    public Version: string = "1.0.0";
    public async Install(Job: Jobs) {
        await this.AddParam("URL","https://www.kap.org.tr/tr/FilterSgbf/FILTERSGBF/${KAPMemberId}/ALL/${NotifyInterval}");
        await this.AddParam("NotifyInterval","365");
    }
    public async Run(BaseJob: CrokerJobs) {
        let baseUrl = (await this.GetParam("URL"))?.Value;
        let interval = (await this.GetParam("NotifyInterval"))?.Value;
        let client = new PrismaClient();
        let resultArray = await client.$queryRawUnsafe<BISTCompany[]>("SELECT * FROM BISTCompanies");
        let allNotifications:BISTCompanyNotifications[] = [];
        for await(let company of resultArray){
            if(baseUrl !== undefined && interval !== undefined){
                let KAPLink = baseUrl?.replace("${KAPMemberId}",company.KAPMemberId).replace("${NotifyInterval}",interval?.toString());
                let KAPPageResult =  await axios.get(KAPLink, {headers: {
                    'Content-Type': 'application/json',
                },timeout: 60000});
                for await(let notification of KAPPageResult.data){
                    let noti:BISTCompanyNotifications = {
                        Id:0,
                        KAPMemberId:company.KAPMemberId,
                        NotifyId:notification.basic.disclosureIndex,
                        Class:notification.basic.disclosureClass,
                        Type:notification.basic.disclosureType,
                        Category:notification.basic.disclosureCategory,
                        PublishDate:moment(notification.basic.publishDate,"DD.MM.YYYY HH:MM").toDate(),
                        Title:notification.basic.title,
                        Summary:notification.basic.summary


                    };
                    allNotifications.push(noti);
                }
            }
        }
    }
    public async Completed(BaseJob: CrokerJobs) {
        console.log("tamamlandı")
    }

}

export type BISTCompanyNotifications = {
    Id:number;
    KAPMemberId:string;
    NotifyId:number;
    PublishDate:Date;
    Category:string;
    Type:string;
    Class:string;
    Title:string;
    Summary:string;
}