import { CrawlerLoader, CrawlerResult, CrokerCrawler, HttpMethodType } from "../../web-crawlers/CrokerCrawler";
import { CrokerJobs } from "../CrokerJobs";

export class BistStaticValueGetter extends CrokerJobs{

    constructor(JobName:string){
        super(JobName)
    }

    private async CrawlerBISTLoader():Promise<CrawlerResult>{
        let crawler:CrokerCrawler = new CrokerCrawler();

        let ParamURL = this.Job?.Params.filter(param => {param.Name = "URL"})[0].Value!;
        let ParamMethod = this.Job?.Params.filter(param => param.Name = "HttpMethod")[0].Value!

        if(ParamURL === undefined || ParamMethod === undefined){
            throw Error("Parametreler geçersiz");
        }

        let loader:CrawlerLoader = {
            URL: ParamURL,
            HttpMethod: ParamMethod as HttpMethodType
        }
        let result:CrawlerResult = await crawler.Load(loader);
        return result;
    }

    public async Run() {

        let crawlerResult = await this.CrawlerBISTLoader();
        let $ = crawlerResult.Document
        let FKBaslikIndex = $(".ozetbaslikkbaslik").toArray().findIndex(el => $(el).text() == "F/K");
        let ValuesArray = $(".ozetbaslikdata").toArray()
        let FKValue = $(ValuesArray[FKBaslikIndex]).find("span").text();
        console.log(FKValue);

    }
    public async Completed(){
        throw new Error("Method not implemented.");
    }

}