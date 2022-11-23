-- CreateTable
CREATE TABLE "JobValues" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "Value" TEXT NOT NULL,
    "DateOfValue" DATETIME NOT NULL,
    "IsDeleted" BOOLEAN NOT NULL DEFAULT false,
    "JobId" INTEGER NOT NULL,
    CONSTRAINT "JobValues_JobId_fkey" FOREIGN KEY ("JobId") REFERENCES "Jobs" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Jobs" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "ExecuterClass" TEXT NOT NULL,
    "ExecuteCronTime" TEXT NOT NULL,
    "Version" TEXT NOT NULL DEFAULT '1.0.0',
    "IsDeleted" BOOLEAN NOT NULL DEFAULT false,
    "IsActive" BOOLEAN NOT NULL DEFAULT true,
    "IsRunningNow" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Jobs" ("ExecuteCronTime", "ExecuterClass", "Id", "IsActive", "IsDeleted", "IsRunningNow", "Name") SELECT "ExecuteCronTime", "ExecuterClass", "Id", "IsActive", "IsDeleted", "IsRunningNow", "Name" FROM "Jobs";
DROP TABLE "Jobs";
ALTER TABLE "new_Jobs" RENAME TO "Jobs";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
