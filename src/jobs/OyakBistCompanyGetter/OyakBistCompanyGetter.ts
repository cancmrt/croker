import axios from "axios";
import { CrokerJobs } from "../../jobs-base/CrokerJobs";
import { Jobs, PrismaClient } from "../../prisma-client";
import { CrokerCrawler } from "../../web-crawlers/CrokerCrawler";

export class OyakBistCompanyGetter extends CrokerJobs {

    public Name: string = "Oyak Bist Company Getter";
    public ExecuterClass: string = "OyakBistCompanyGetter";
    public ExecuteCronTime: string = "00 19 * * 1-6";
    public Version: string = "1.0.0";

    private BISTCompanyList:Array<BISTCompany> = [];


    public async Install(Job: Jobs): Promise<void> {
        await this.AddParam("URL","https://www.oyakyatirim.com.tr/piyasa-verileri/XU100");
        await this.AddParam("HttpMethod", "GET");
        await this.AddParam("KAPMemberSearch","https://www.kap.org.tr/tr/api/member/filter?keyword=")
    }
    public async Run(BaseJob: CrokerJobs): Promise<void> {
        try{
            let crawler:CrokerCrawler = new CrokerCrawler();
            let result = await crawler.AutoJobParamLoader(BaseJob.Job);
            if (result.IsError == true){
                    throw Error(result.Error);
            }
            let $ = result.Document;
            let AllCompaniesTable  = $("div.portlet.box.green table tbody tr").toArray();
            this.BISTCompanyList = [];
            for await (let el of AllCompaniesTable){
                let SymbolOfCompany = crawler.RemoveTagAndWhiteSpaces($(el).find("td:nth-child(1) a").text());
                let NameOfCompany = crawler.RemoveTagAndWhiteSpaces($(el).find("td:nth-child(2)").text());
                
                let company:BISTCompany = {
                    Id:0,
                    Symbol:SymbolOfCompany,
                    Name:NameOfCompany,
                    KAPMemberId:""

                };
                let KAPLink = await this.GetParam("KAPMemberSearch");
                if(KAPLink !== undefined){
                    let link = KAPLink.Value+company.Symbol;
                    let KAPPageResult =  await axios.get(link, {headers: {
                        'Content-Type': 'application/json',
                    },timeout: 60000});
                    let KAPSearchObj = KAPPageResult.data;
                    company.KAPMemberId = KAPSearchObj[0].mkkMemberOid;
                }
                this.BISTCompanyList.push(company);
            };
            let client = new PrismaClient();
            client.$connect();
            for await (let comp of this.BISTCompanyList) {
                let resultArray = await client.$queryRawUnsafe<BISTCompany[]>("SELECT * FROM BISTCompanies");
                let result = resultArray.filter(el => el.Symbol == comp.Symbol);
                if(result.length == 0){
                    await client.$queryRawUnsafe("INSERT INTO BISTCompanies(Name,Symbol,KAPMemberId) VALUES($1,$2,$3)",comp.Name,comp.Symbol,comp.KAPMemberId);
                }
                else{
                    await client.$queryRawUnsafe("UPDATE BISTCompanies SET Name=$1,Symbol=$2,KAPMemberId=$3 Where Id=$4",comp.Name,comp.Symbol,comp.KAPMemberId,result[0].Id);
                }
            };
            client.$disconnect();
        }
        catch(ex){
            console.log(ex);
        }
      
      
    }
    public async Completed(BaseJob: CrokerJobs): Promise<void> {
        console.log("completed")
    }

};

export type BISTCompany = {
    Id:number;
    Name:string;
    Symbol:string;
    KAPMemberId:string;
}