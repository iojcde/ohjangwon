/*
  Warnings:

  - Added the required column `pw` to the `Letter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Letter" ADD COLUMN     "pw" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Like" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
);
