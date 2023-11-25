-- CreateTable
CREATE TABLE "farmers" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "nickname" VARCHAR(255) NOT NULL,
    "gender" VARCHAR(255) NOT NULL,
    "phone" CHAR(13) NOT NULL,
    "cpf" CHAR(11) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "marital_status" VARCHAR(255) NOT NULL,
    "credit_line" VARCHAR(255) NOT NULL,
    "course" VARCHAR(255) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "user_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "farmers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "farmers" ADD CONSTRAINT "farmers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
