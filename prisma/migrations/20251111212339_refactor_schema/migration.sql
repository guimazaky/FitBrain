/*
  Warnings:

  - You are about to drop the column `provider` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `providerAccountId` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `user` table. All the data in the column will be lost.
  - Made the column `name` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "account" DROP CONSTRAINT "account_userId_fkey";

-- DropIndex
DROP INDEX "account_provider_providerAccountId_key";

-- AlterTable
ALTER TABLE "account" DROP COLUMN "provider",
DROP COLUMN "providerAccountId";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "password",
ALTER COLUMN "name" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "account" ADD CONSTRAINT "account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
