/*
  Warnings:

  - You are about to drop the column `finally` on the `livestockActivities` table. All the data in the column will be lost.
  - Added the required column `goal` to the `livestockActivities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "livestockActivities" DROP COLUMN "finally",
ADD COLUMN     "goal" VARCHAR(255) NOT NULL;
