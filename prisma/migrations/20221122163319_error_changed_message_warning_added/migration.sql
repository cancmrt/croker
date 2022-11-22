/*
  Warnings:

  - You are about to drop the column `Error` on the `JobLogs` table. All the data in the column will be lost.
  - Added the required column `IsWarning` to the `JobLogs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Message` to the `JobLogs` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_JobLogs" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "JobId" INTEGER NOT NULL,
    "Message" TEXT NOT NULL,
    "ExecuteTime" DATETIME NOT NULL,
    "IsError" BOOLEAN NOT NULL,
    "IsWarning" BOOLEAN NOT NULL,
    CONSTRAINT "JobLogs_JobId_fkey" FOREIGN KEY ("JobId") REFERENCES "Jobs" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_JobLogs" ("ExecuteTime", "Id", "IsError", "JobId") SELECT "ExecuteTime", "Id", "IsError", "JobId" FROM "JobLogs";
DROP TABLE "JobLogs";
ALTER TABLE "new_JobLogs" RENAME TO "JobLogs";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
