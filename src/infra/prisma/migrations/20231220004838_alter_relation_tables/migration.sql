/*
  Warnings:

  - You are about to drop the column `user_id` on the `farmers` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `serviceOrders` table. All the data in the column will be lost.
  - Added the required column `family_id` to the `farmers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "farmers" DROP CONSTRAINT "farmers_user_id_fkey";

-- DropForeignKey
ALTER TABLE "serviceOrders" DROP CONSTRAINT "serviceOrders_user_id_fkey";

-- AlterTable
ALTER TABLE "farmers" DROP COLUMN "user_id",
ADD COLUMN     "family_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "serviceOrders" DROP COLUMN "user_id";

-- AddForeignKey
ALTER TABLE "farmers" ADD CONSTRAINT "farmers_family_id_fkey" FOREIGN KEY ("family_id") REFERENCES "agricuturalFamilys"("id") ON DELETE CASCADE ON UPDATE CASCADE;
