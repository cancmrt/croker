import axios from "axios";
import { CrokerJobs } from "croker-base/app.jobs.context.js";
import { CrawlerLoader, CrokerCrawler, HttpMethodType } from "croker-base/app.crawler.context.js";
import { DataTypes, Context } from 'croker-base/app.dbcontext.js'

export class OyakBistCompanyGetter extends CrokerJobs {

    constructor(){
        super(
            "Oyak Bist Company Getter",
            "OyakBistCompanyGetter",
            "00 19 * * 1-6",
            "1.0.0"
        )
    }

    BistCompaniesModel = Context.define('BISTCompanies', {
        Id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        Name: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: ''
        },
        Symbol: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: ''
        },
        KAPMemberId: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: ''
        }
      })


    async Install(Job) {
        await Context.sync();
        await this.AddParam("URL","https://www.oyakyatirim.com.tr/piyasa-verileri/XU100");
        await this.AddParam("HttpMethod", "GET");
        await this.AddParam("KAPMemberSearch","https://www.kap.org.tr/tr/api/member/filter?keyword=")
    }
    async Run(BaseJob) {
    try{
            let crawler = new CrokerCrawler();
            let loader = new CrawlerLoader();
            loader.URL = 'https://www.oyakyatirim.com.tr/piyasa-verileri/XU100'
            loader.HttpMethod = 'GET'
            let result = await crawler.load(loader)
            if (result.IsError == true){
                    throw new Error(result.Error);
            }
            let $ = result.Document;
            let AllCompaniesTable  = $("div.portlet.box.green table tbody tr").toArray();
            this.BISTCompanyList = [];
            for await (let el of AllCompaniesTable){
                let SymbolOfCompany = crawler.RemoveTagAndWhiteSpaces($(el).find("td:nth-child(1) a").text());
                let NameOfCompany = crawler.RemoveTagAndWhiteSpaces($(el).find("td:nth-child(2)").text());
                
                let KAPLink = new CrawlerLoader();
                KAPLink.URL = 'https://www.kap.org.tr/tr/api/member/filter?keyword='+SymbolOfCompany
                KAPLink.HttpMethod = HttpMethodType.GET
                let KapMemberId = "";
                if(KAPLink !== undefined){
                    let KAPPageResult =  crawler.LoadJSON(KAPLink)
                    if (KAPPageResult.IsError == true){
                            throw new Error(KAPPageResult.Error);
                    }
                    let KAPSearchObj = KAPPageResult.JSON;
                    KapMemberId = KAPSearchObj[0].mkkMemberOid;
                }
                let findedBistCompany = await this.BistCompaniesModel.findOne({
                    where: {
                      Symbol: SymbolOfCompany
                    }
                });
                if(findedBistCompany !== null){
                    await this.BistCompaniesModel.update(
                    {
                        Name:NameOfCompany,
                        Symbol:SymbolOfCompany,
                        KAPMemberId:KapMemberId
                    },
                    {
                        where: {
                          Symbol: SymbolOfCompany
                        }
                    })
                }
                else{
                    await this.BistCompaniesModel.create(
                    {
                        Name:NameOfCompany,
                        Symbol:SymbolOfCompany,
                        KAPMemberId:KapMemberId
                    })
                }
            }
        }
        catch(ex){
            console.log(ex);
        }
      
      
    }
    async Completed(BaseJob) {
        console.log("completed")
    }

};
