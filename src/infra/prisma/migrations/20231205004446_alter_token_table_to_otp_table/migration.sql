/*
  Warnings:

  - You are about to drop the `tokens` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "tokens" DROP CONSTRAINT "tokens_user_email_fkey";

-- DropTable
DROP TABLE "tokens";

-- CreateTable
CREATE TABLE "Otps" (
    "id" TEXT NOT NULL,
    "user_email" VARCHAR(255) NOT NULL,
    "otp" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Otps_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Otps" ADD CONSTRAINT "Otps_user_email_fkey" FOREIGN KEY ("user_email") REFERENCES "users"("email") ON DELETE CASCADE ON UPDATE CASCADE;
