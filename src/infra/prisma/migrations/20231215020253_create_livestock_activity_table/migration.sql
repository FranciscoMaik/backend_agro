-- CreateTable
CREATE TABLE "livestockActivities" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "females_amount" INTEGER NOT NULL,
    "males_amount" INTEGER NOT NULL,
    "breed" VARCHAR(255) NOT NULL,
    "size" VARCHAR(255) NOT NULL,
    "production_system" VARCHAR(255) NOT NULL,
    "power_supply" VARCHAR(255) NOT NULL,
    "finally" VARCHAR(255) NOT NULL,
    "hectares" INTEGER NOT NULL,
    "property_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "livestockActivities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "livestockActivities" ADD CONSTRAINT "livestockActivities_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "properties"("id") ON DELETE CASCADE ON UPDATE CASCADE;
