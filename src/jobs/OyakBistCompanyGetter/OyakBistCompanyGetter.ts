import { CrokerJobs } from "../../jobs-base/CrokerJobs";
import { Jobs, Prisma, PrismaClient } from "../../prisma-client";
import { CrokerCrawler } from "../../web-crawlers/CrokerCrawler";

export class OyakBistCompanyGetter extends CrokerJobs {

    public Name: string = "Oyak Bist Company Getter";
    public ExecuterClass: string = "OyakBistCompanyGetter";
    public ExecuteCronTime: string = "* * * * *";
    public Version: string = "1.0.0";

    private BISTCompanyList:Array<BISTCompany> = [];


    public async Install(Job: Jobs): Promise<void> {
        await this.AddParam("URL","https://www.oyakyatirim.com.tr/piyasa-verileri/XU100");
        await this.AddParam("HttpMethod", "GET");
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
            AllCompaniesTable.forEach(el => {
                let SymbolOfCompany = crawler.RemoveTagAndWhiteSpaces($(el).find("td:nth-child(1) a").text());
                let NameOfCompany = crawler.RemoveTagAndWhiteSpaces($(el).find("td:nth-child(2)").text());
                let company:BISTCompany = {
                    Id:0,
                    Symbol:SymbolOfCompany,
                    Name:NameOfCompany

                };
                this.BISTCompanyList.push(company);
            });
            let client = new PrismaClient();
            client.$connect();
            for await (let comp of this.BISTCompanyList) {
                let resultArray = await client.$queryRawUnsafe<BISTCompany[]>("SELECT * FROM BISTCompanies");
                let result = resultArray.filter(el => el.Symbol == comp.Symbol);
                if(result.length == 0){
                    await client.$queryRawUnsafe("INSERT INTO BISTCompanies(Name,Symbol) VALUES($1,$2)",comp.Name,comp.Symbol);
                }
                else{
                    await client.$queryRawUnsafe("UPDATE BISTCompanies SET Name=$1,Symbol=$2 Where Id=$3",comp.Name,comp.Symbol,result[0].Id);
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

type BISTCompany = {
    Id:number;
    Name:string;
    Symbol:string;
}