"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrokerCrawler = exports.MethodType = void 0;
const cheerio_1 = __importDefault(require("cheerio"));
const axios_1 = __importDefault(require("axios"));
var MethodType;
(function (MethodType) {
    MethodType[MethodType["GET"] = 0] = "GET";
    MethodType[MethodType["POST"] = 1] = "POST";
})(MethodType = exports.MethodType || (exports.MethodType = {}));
class CrokerCrawler {
    StripHtmlBasic(html) {
        return html.replace(/(<([^>]+)>)/gi, "");
    }
    async Load(el) {
        let result = {
            URL: el.URL,
            Method: el.Method,
            PageHTML: "",
            Document: cheerio_1.default.load("<br/>"),
            IsError: false,
            Error: null
        };
        try {
            let URLResponse;
            if (el.Method == MethodType.GET) {
                URLResponse = await axios_1.default.get(el.URL);
            }
            else if (el.Method == MethodType.POST) {
                URLResponse = await axios_1.default.post(el.URL);
            }
            result.PageHTML = URLResponse.data;
            result.Document = cheerio_1.default.load(result.PageHTML);
        }
        catch (e) {
            result.IsError = true;
            result.Error = e;
        }
        return result;
    }
}
exports.CrokerCrawler = CrokerCrawler;
//# sourceMappingURL=CrokerCrawler.js.map