/*
  Warnings:

  - A unique constraint covering the columns `[pw,author]` on the table `Letter` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Letter_pw_author_key" ON "Letter"("pw", "author");
