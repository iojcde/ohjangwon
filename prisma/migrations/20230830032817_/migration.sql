/*
  Warnings:

  - A unique constraint covering the columns `[author]` on the table `Letter` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Letter_author_key" ON "Letter"("author");

-- CreateIndex
CREATE INDEX "Letter_pw_author_idx" ON "Letter"("pw", "author");
