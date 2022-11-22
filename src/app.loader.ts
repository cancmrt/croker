import { JobsRunner } from "./jobs/JobsRunner";
global.InitializedCrokerJobs = [];

export class Loader {
    constructor(){
        
    }
    public async Load(){
        process.stdin.resume();

    //do something when app is closing
        process.on('exit', this.exitHandler);



        //catches ctrl+c event
        process.on('SIGINT', this.exitHandler);

        // catches "kill pid" (for example: nodemon restart)
        process.on('SIGUSR1', this.exitHandler);
        process.on('SIGUSR2', this.exitHandler);

        //catches uncaught exceptions
        process.on('uncaughtException', this.exitHandler);
    }
    async exitHandler() {
        for await (const job of global.InitializedCrokerJobs) {
            await job.Stop();
        };
        process.exit(0);
    }
    public async Start(): Promise<void> {
        let jobRunner = new JobsRunner();
        await jobRunner.LoadAllJobs();

    }
}
