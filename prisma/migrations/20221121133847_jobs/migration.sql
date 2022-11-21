/*
  Warnings:

  - Added the required column `IsDeleted` to the `VaultValues` table without a default value. This is not possible if the table is not empty.
  - Added the required column `IsDeleted` to the `VaultType` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Jobs" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "ExecuterClass" TEXT NOT NULL,
    "ExecuteCronTime" TEXT NOT NULL,
    "IsDeleted" BOOLEAN NOT NULL,
    "IsActive" BOOLEAN NOT NULL,
    "IsRunningNow" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "JobParams" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "Value" TEXT NOT NULL,
    "IsDeleted" BOOLEAN NOT NULL,
    "JobId" INTEGER NOT NULL,
    CONSTRAINT "JobParams_JobId_fkey" FOREIGN KEY ("JobId") REFERENCES "Jobs" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "JobLogs" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "JobId" INTEGER NOT NULL,
    "ExecuteTime" DATETIME NOT NULL,
    "IsError" BOOLEAN NOT NULL,
    "Error" TEXT NOT NULL,
    CONSTRAINT "JobLogs_JobId_fkey" FOREIGN KEY ("JobId") REFERENCES "Jobs" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_VaultValues" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "VaultTypeId" INTEGER NOT NULL,
    "DateOfValue" DATETIME NOT NULL,
    "IsDeleted" BOOLEAN NOT NULL,
    CONSTRAINT "VaultValues_VaultTypeId_fkey" FOREIGN KEY ("VaultTypeId") REFERENCES "VaultType" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_VaultValues" ("DateOfValue", "Id", "Name", "VaultTypeId") SELECT "DateOfValue", "Id", "Name", "VaultTypeId" FROM "VaultValues";
DROP TABLE "VaultValues";
ALTER TABLE "new_VaultValues" RENAME TO "VaultValues";
CREATE TABLE "new_VaultType" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "IsDeleted" BOOLEAN NOT NULL
);
INSERT INTO "new_VaultType" ("Id", "Name") SELECT "Id", "Name" FROM "VaultType";
DROP TABLE "VaultType";
ALTER TABLE "new_VaultType" RENAME TO "VaultType";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
