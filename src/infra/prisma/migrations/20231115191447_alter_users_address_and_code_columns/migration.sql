/*
  Warnings:

  - Changed the type of `code` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "address" DROP NOT NULL,
DROP COLUMN "code",
ADD COLUMN     "code" INTEGER NOT NULL;
