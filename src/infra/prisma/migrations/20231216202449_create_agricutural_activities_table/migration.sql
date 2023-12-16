-- CreateTable
CREATE TABLE "agricuturalActivities" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "uses_irrigation" BOOLEAN NOT NULL,
    "uses_pesticides" BOOLEAN NOT NULL,
    "cultivation" VARCHAR(255) NOT NULL,
    "input" VARCHAR(255) NOT NULL,
    "hectares" INTEGER NOT NULL,
    "work_method" VARCHAR(255) NOT NULL,
    "used_equipament" VARCHAR(255) NOT NULL,
    "property_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "agricuturalActivities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "agricuturalActivities" ADD CONSTRAINT "agricuturalActivities_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "properties"("id") ON DELETE CASCADE ON UPDATE CASCADE;
