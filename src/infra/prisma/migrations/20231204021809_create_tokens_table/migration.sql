-- CreateTable
CREATE TABLE "tokens" (
    "id" TEXT NOT NULL,
    "user_email" VARCHAR(255) NOT NULL,
    "key" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tokens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tokens" ADD CONSTRAINT "tokens_user_email_fkey" FOREIGN KEY ("user_email") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
