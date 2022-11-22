import cheerio from 'cheerio'
import axios from 'axios'
import { Prisma } from '../prisma-client';


export enum HttpMethodType {
    GET = "GET",
    POST = "POST"
}

export type CrawlerLoader = {
    URL:string,
    HttpMethod:HttpMethodType

};
export type CrawlerResult = {
    URL:string,
    HttpMethod:HttpMethodType,
    PageHTML:string,
    Document:ReturnType<typeof cheerio.load>
    IsError:boolean
    Error:any
};

export class CrokerCrawler{


    private jobsWithParams = Prisma.validator<Prisma.JobsArgs>()({
        include: { Params: true },
    });
    private Job:Prisma.JobsGetPayload<typeof this.jobsWithParams> | undefined;

    public RemoveTagAndWhiteSpaces(html:string):string{
        return html.replace(/(<([^>]+)>)/gi, "").replace(/\s\s+/g,""); 
    }
    public async AutoJobParamLoader(Job:Prisma.JobsGetPayload<typeof this.jobsWithParams> | undefined):Promise<CrawlerResult>{
        let ParamURL = Job?.Params.filter(param => param.Name == "URL")[0].Value!;
        let ParamMethod = Job?.Params.filter(param => param.Name == "HttpMethod")[0].Value!

        if(ParamURL === undefined){
            throw Error("Job 'URL' parametresine sahip değil");
        }
        if(ParamMethod === undefined){
            throw Error("Job 'HttpMethod' parametresine sahip değil");
        }

        let loader:CrawlerLoader = {
            URL: ParamURL,
            HttpMethod: ParamMethod as HttpMethodType
        }
        let result:CrawlerResult = await this.Load(loader);

        return result
    }
    public async Load(el:CrawlerLoader):Promise<CrawlerResult>{
        let result:CrawlerResult = {
            URL:el.URL,
            HttpMethod: el.HttpMethod,
            PageHTML:"",
            Document: cheerio.load("<br/>"),
            IsError: false,
            Error:null
        };
        
        try{
            let URLResponse:string = "";
            if(el.HttpMethod == HttpMethodType.GET){
                const  {data,status} = await axios.get(el.URL);
                if(status != 200){
                    throw Error("İstenilen adrese ulaşılamadı.")
                }
                URLResponse = data;

            }
            else if(el.HttpMethod == HttpMethodType.POST){
                const  {data,status} = await axios.post(el.URL);
                if(status != 200){
                    throw Error("İstenilen adrese ulaşılamadı.")
                }
                URLResponse = data;
            }
            result.PageHTML = URLResponse
            result.Document = cheerio.load(result.PageHTML);
        }
        catch(e){
            result.IsError = true;
            result.Error = e;
        }
        return result
        
        
        
        
        
    }



}