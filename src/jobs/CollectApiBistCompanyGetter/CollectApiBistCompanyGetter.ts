import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { CrokerJobs } from "../../jobs-base/CrokerJobs";
import { Jobs } from "../../prisma-client";
import { HttpMethodType } from "../../web-crawlers/CrokerCrawler";

export class CollectApiBistCompanyGetter extends CrokerJobs {

    public Name: string = "Collect Api Bist Company Getter";
    public ExecuterClass: string = "CollectApiBistCompanyGetter";
    public ExecuteCronTime: string = "* * * * * *";
    public Version: string = "1.0.0";


    public async Install(Job: Jobs): Promise<void> {
        await this.AddParam("URL","https://api.collectapi.com/economy/hisseSenedi");
        await this.AddParam("Header-Token", "apikey 2aU58SXGAAyjwT3TFJQhEd:63JggHywq4OIJaJNe9KsTN");
        await this.AddParam("Header-ContentType","application/json");

    }
    public async Run(BaseJob: CrokerJobs): Promise<void> {
        let ParamURL = BaseJob.Job?.Params.filter(param => param.Name == "URL")[0].Value!;
        let Token = BaseJob.Job?.Params.filter(param => param.Name == "Header-Token")[0].Value!
        let ContentType = BaseJob.Job?.Params.filter(param => param.Name == "Header-ContentType")[0].Value!
        if(ParamURL !== undefined && Token !== undefined && ContentType !== undefined){
            let config: AxiosRequestConfig = {
                headers: {
                  'Content-Type': ContentType,
                  'Authorization': Token,
                },
                responseType: 'json'
              };
              try{
                let response = await axios.get(ParamURL,config);
                let result = response.data;
              }
              catch(ex){
                throw ex;
              }
            
        }
    }
    public async Completed(BaseJob: CrokerJobs): Promise<void> {
        throw new Error("Method not implemented.");
    }

}