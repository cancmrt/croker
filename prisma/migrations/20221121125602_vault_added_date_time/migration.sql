/*
  Warnings:

  - Added the required column `DateOfValue` to the `VaultValues` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_VaultValues" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "VaultTypeId" INTEGER NOT NULL,
    "DateOfValue" DATETIME NOT NULL,
    CONSTRAINT "VaultValues_VaultTypeId_fkey" FOREIGN KEY ("VaultTypeId") REFERENCES "VaultType" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_VaultValues" ("Id", "Name", "VaultTypeId") SELECT "Id", "Name", "VaultTypeId" FROM "VaultValues";
DROP TABLE "VaultValues";
ALTER TABLE "new_VaultValues" RENAME TO "VaultValues";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
