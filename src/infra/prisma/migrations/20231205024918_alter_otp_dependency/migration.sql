/*
  Warnings:

  - You are about to drop the `Otps` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Otps" DROP CONSTRAINT "Otps_user_email_fkey";

-- DropTable
DROP TABLE "Otps";

-- CreateTable
CREATE TABLE "otps" (
    "id" TEXT NOT NULL,
    "user_email" VARCHAR(255) NOT NULL,
    "otp" TEXT NOT NULL,
    "type" "OtpType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "otps_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "otps_user_email_key" ON "otps"("user_email");

-- AddForeignKey
ALTER TABLE "otps" ADD CONSTRAINT "otps_user_email_fkey" FOREIGN KEY ("user_email") REFERENCES "users"("email") ON DELETE CASCADE ON UPDATE CASCADE;
