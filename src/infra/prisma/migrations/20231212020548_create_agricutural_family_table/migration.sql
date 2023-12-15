-- CreateTable
CREATE TABLE "agricuturalFamilys" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "members_amount" INTEGER NOT NULL,
    "property_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "agricuturalFamilys_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "agricuturalFamilys" ADD CONSTRAINT "agricuturalFamilys_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "properties"("id") ON DELETE CASCADE ON UPDATE CASCADE;
