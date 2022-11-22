/*
  Warnings:

  - Added the required column `Value` to the `VaultValues` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_JobParams" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "Value" TEXT NOT NULL,
    "IsDeleted" BOOLEAN NOT NULL DEFAULT false,
    "JobId" INTEGER NOT NULL,
    CONSTRAINT "JobParams_JobId_fkey" FOREIGN KEY ("JobId") REFERENCES "Jobs" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_JobParams" ("Id", "IsDeleted", "JobId", "Name", "Value") SELECT "Id", "IsDeleted", "JobId", "Name", "Value" FROM "JobParams";
DROP TABLE "JobParams";
ALTER TABLE "new_JobParams" RENAME TO "JobParams";
CREATE TABLE "new_VaultType" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "IsDeleted" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_VaultType" ("Id", "IsDeleted", "Name") SELECT "Id", "IsDeleted", "Name" FROM "VaultType";
DROP TABLE "VaultType";
ALTER TABLE "new_VaultType" RENAME TO "VaultType";
CREATE TABLE "new_VaultValues" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "Value" TEXT NOT NULL,
    "VaultTypeId" INTEGER NOT NULL,
    "DateOfValue" DATETIME NOT NULL,
    "IsDeleted" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "VaultValues_VaultTypeId_fkey" FOREIGN KEY ("VaultTypeId") REFERENCES "VaultType" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_VaultValues" ("DateOfValue", "Id", "IsDeleted", "Name", "VaultTypeId") SELECT "DateOfValue", "Id", "IsDeleted", "Name", "VaultTypeId" FROM "VaultValues";
DROP TABLE "VaultValues";
ALTER TABLE "new_VaultValues" RENAME TO "VaultValues";
CREATE TABLE "new_Jobs" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "ExecuterClass" TEXT NOT NULL,
    "ExecuteCronTime" TEXT NOT NULL,
    "IsDeleted" BOOLEAN NOT NULL DEFAULT false,
    "IsActive" BOOLEAN NOT NULL DEFAULT true,
    "IsRunningNow" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Jobs" ("ExecuteCronTime", "ExecuterClass", "Id", "IsActive", "IsDeleted", "IsRunningNow", "Name") SELECT "ExecuteCronTime", "ExecuterClass", "Id", "IsActive", "IsDeleted", "IsRunningNow", "Name" FROM "Jobs";
DROP TABLE "Jobs";
ALTER TABLE "new_Jobs" RENAME TO "Jobs";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
