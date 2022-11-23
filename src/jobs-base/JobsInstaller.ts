import * as fs from 'fs';
import * as path from 'path'

export class JobsInstaller{

    public async InstallAllJobs(){
        let reqPath = path.join(__dirname, '../jobs');
        let getDirectories = fs.readdirSync(reqPath)
        for await (const dir of getDirectories) {
            if(path.extname(dir) == ""){
                let basePathName = path.basename(dir);
                let jobClass = await import("../jobs/"+basePathName+"/"+basePathName);
                let createdClass = new jobClass[basePathName]();
                await createdClass.SystemInstaller();
            }
        };
    }

}