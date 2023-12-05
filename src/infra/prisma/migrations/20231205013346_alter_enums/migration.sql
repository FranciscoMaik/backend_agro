/*
  Warnings:

  - The `account_type` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `type` on the `Otps` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "UserAccountType" AS ENUM ('user', 'adm');

-- CreateEnum
CREATE TYPE "OtpType" AS ENUM ('forgot', 'email');

-- AlterTable
ALTER TABLE "Otps" DROP COLUMN "type",
ADD COLUMN     "type" "OtpType" NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "account_type",
ADD COLUMN     "account_type" "UserAccountType" NOT NULL DEFAULT 'user';

-- DropEnum
DROP TYPE "AccountType";

-- DropEnum
DROP TYPE "Type";
