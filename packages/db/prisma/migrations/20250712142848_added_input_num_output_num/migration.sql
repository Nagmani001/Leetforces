/*
  Warnings:

  - Added the required column `inputNum` to the `TestCase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outputNum` to the `TestCase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TestCase" ADD COLUMN     "inputNum" INTEGER NOT NULL,
ADD COLUMN     "outputNum" INTEGER NOT NULL;
