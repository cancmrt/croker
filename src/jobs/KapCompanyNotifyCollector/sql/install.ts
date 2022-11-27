export const install =
`-- CreateTable
CREATE TABLE "BISTCompaniesNotifications" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "KAPMemberId" TEXT NOT NULL,
    "NotifyId" INTEGER NOT NULL,
    "PublishDate" DATETIME NOT NULL,
    "Category" TEXT NOT NULL,
    "Type" TEXT NOT NULL,
    "Class" TEXT NOT NULL,
    "Title" TEXT NOT NULL,
    "Summary" TEXT NOT NULL
);`