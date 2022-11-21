import cheerio from 'cheerio'
import axios from 'axios'


export enum MethodType {
    GET,
    POST
}

export type CrawlerLoader = {
    URL:string,
    Method:MethodType

};
export type CrawlerResult = {
    URL:string,
    Method:MethodType,
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
            Method: el.Method,
            PageHTML:"",
            Document: cheerio.load("<br/>"),
            IsError: false,
            Error:null
        };
        
        try{
            let URLResponse:any;
            if(el.Method == MethodType.GET){
                URLResponse = await axios.get(el.URL);
            }
            else if(el.Method == MethodType.POST){
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