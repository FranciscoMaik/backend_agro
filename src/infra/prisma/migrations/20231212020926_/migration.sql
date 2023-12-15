/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `agricuturalFamilys` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "agricuturalFamilys_name_key" ON "agricuturalFamilys"("name");
