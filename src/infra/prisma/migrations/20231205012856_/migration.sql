/*
  Warnings:

  - The values [user,adm] on the enum `AccountType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AccountType_new" AS ENUM ('USER', 'ADM');
ALTER TABLE "users" ALTER COLUMN "account_type" TYPE "AccountType_new" USING ("account_type"::text::"AccountType_new");
ALTER TYPE "AccountType" RENAME TO "AccountType_old";
ALTER TYPE "AccountType_new" RENAME TO "AccountType";
DROP TYPE "AccountType_old";
COMMIT;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "account_type" SET DEFAULT 'USER';
