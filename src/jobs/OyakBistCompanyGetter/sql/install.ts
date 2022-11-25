export const install =
`-- CreateTable
CREATE TABLE "BISTCompanies" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "Symbol" TEXT NOT NULL
);`