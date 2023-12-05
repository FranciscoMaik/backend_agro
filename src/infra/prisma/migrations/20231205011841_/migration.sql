/*
  Warnings:

  - You are about to drop the column `code` on the `users` table. All the data in the column will be lost.
  - Changed the type of `type` on the `Otps` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `account_type` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('user', 'adm');

-- CreateEnum
CREATE TYPE "Type" AS ENUM ('forgot', 'email');

-- AlterTable
ALTER TABLE "Otps" DROP COLUMN "type",
ADD COLUMN     "type" "Type" NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "code",
DROP COLUMN "account_type",
ADD COLUMN     "account_type" "AccountType" NOT NULL;
