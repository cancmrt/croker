import { JobsRunner } from "./jobs/JobsRunner";


async function App_Start(): Promise<void> {
    let jobRunner = new JobsRunner();
    await jobRunner.LoadAllJobs();

}


App_Start();
