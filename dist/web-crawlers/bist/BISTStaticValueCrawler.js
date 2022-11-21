"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BISTStaticValueCrawler = void 0;
const CrokerCrawler_1 = require("../CrokerCrawler");
class BISTStaticValueCrawler {
    async Run() {
        let crawler = new CrokerCrawler_1.CrokerCrawler();
        let loader = {
            URL: "https://www.finnet.com.tr/f2000/endeks/EndeksAnaliz.aspx",
            Method: CrokerCrawler_1.MethodType.GET
        };
        let result = await crawler.Load(loader);
        let $ = result.Document;
        $(".ozetbaslikkbaslik").each(function (i, el) {
            console.log(crawler.StripHtmlBasic(($(el).text())));
        });
    }
}
exports.BISTStaticValueCrawler = BISTStaticValueCrawler;
//# sourceMappingURL=BISTStaticValueCrawler.js.map