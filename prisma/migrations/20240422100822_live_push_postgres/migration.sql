-- CreateTable
CREATE TABLE "Locations" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "ipAddress" TEXT,
    "countryCode" TEXT,
    "countryName" TEXT,
    "city" TEXT,
    "latitude" TEXT,
    "longitude" TEXT,
    "browser" TEXT,
    "browserVersion" TEXT,
    "deviceBrand" TEXT,
    "deviceModel" TEXT,
    "deviceFamily" TEXT,
    "os" TEXT,
    "osVersion" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Locations_id_key" ON "Locations"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Locations_uuid_key" ON "Locations"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_uuid_key" ON "User"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
