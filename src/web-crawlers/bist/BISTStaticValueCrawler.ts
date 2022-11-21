import {CrokerCrawler,MethodType,CrawlerLoader,CrawlerResult} from '../CrokerCrawler'
export class BISTStaticValueCrawler {

    public async Run(){
        let crawler:CrokerCrawler = new CrokerCrawler();
        let loader:CrawlerLoader = {
            URL:"https://www.finnet.com.tr/f2000/endeks/EndeksAnaliz.aspx",
            Method:MethodType.GET
        }
        let result:CrawlerResult = await crawler.Load(loader);
        let $ = result.Document
        $(".ozetbaslikkbaslik").each(function(i,el){
            console.log(crawler.StripHtmlBasic(($(el).text())));
        });
        
    }
}