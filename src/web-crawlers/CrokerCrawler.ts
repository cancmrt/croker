import cheerio from 'cheerio'
import axios from 'axios'


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

    public StripHtmlBasic(html:string):string{
        return html.replace(/(<([^>]+)>)/gi, ""); 
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
            let URLResponse:any;
            if(el.HttpMethod == HttpMethodType.GET){
                URLResponse = await axios.get(el.URL);
            }
            else if(el.HttpMethod == HttpMethodType.POST){
                URLResponse = await axios.post(el.URL);
            }
            result.PageHTML = URLResponse.data
            result.Document = cheerio.load(result.PageHTML);
        }
        catch(e){
            result.IsError = true;
            result.Error = e;
        }
        return result
        
        
        
        
        
    }



}