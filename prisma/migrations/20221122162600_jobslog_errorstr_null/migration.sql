-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_JobLogs" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "JobId" INTEGER NOT NULL,
    "ExecuteTime" DATETIME NOT NULL,
    "IsError" BOOLEAN NOT NULL,
    "Error" TEXT,
    CONSTRAINT "JobLogs_JobId_fkey" FOREIGN KEY ("JobId") REFERENCES "Jobs" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_JobLogs" ("Error", "ExecuteTime", "Id", "IsError", "JobId") SELECT "Error", "ExecuteTime", "Id", "IsError", "JobId" FROM "JobLogs";
DROP TABLE "JobLogs";
ALTER TABLE "new_JobLogs" RENAME TO "JobLogs";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
