/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `farmers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "farmers_cpf_key" ON "farmers"("cpf");
