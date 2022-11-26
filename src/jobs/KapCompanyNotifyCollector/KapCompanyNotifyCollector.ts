import { CrokerJobs } from "../../jobs-base/CrokerJobs";
import { Jobs } from "../../prisma-client";

export class KapCompanyNotifyCollector extends CrokerJobs{
    public Name: string = "KAP Company Notify Collector";
    public ExecuterClass: string = "KapCompanyNotifyCollector";
    public ExecuteCronTime: string = "* * * * *"
    public Version: string = "1.0.0";
    public async Install(Job: Jobs) {
        await this.AddParam("URL","https://www.kap.org.tr/tr/FilterSgbf/FILTERSGBF/${KAPCompanyId}/ALL/${NotifyInterval}");
        await this.AddParam("NotifyInterval","365");
    }
    public Run(BaseJob: CrokerJobs): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public Completed(BaseJob: CrokerJobs): Promise<void> {
        throw new Error("Method not implemented.");
    }

}