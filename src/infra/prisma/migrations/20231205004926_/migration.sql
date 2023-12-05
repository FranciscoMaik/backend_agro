/*
  Warnings:

  - A unique constraint covering the columns `[user_email]` on the table `Otps` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Otps_user_email_key" ON "Otps"("user_email");
