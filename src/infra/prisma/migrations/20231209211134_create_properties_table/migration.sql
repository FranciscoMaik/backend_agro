-- CreateTable
CREATE TABLE "properties" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "hectares" INTEGER NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "exploration" VARCHAR(255) NOT NULL,
    "classification" VARCHAR(255) NOT NULL,
    "hydric_source" VARCHAR(255) NOT NULL,
    "electrical_source" VARCHAR(255) NOT NULL,

    CONSTRAINT "properties_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "properties_name_key" ON "properties"("name");
