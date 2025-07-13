/*
  Warnings:

  - Added the required column `inputNum` to the `BasicTestCases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outputNum` to the `BasicTestCases` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BasicTestCases" ADD COLUMN     "inputNum" INTEGER NOT NULL,
ADD COLUMN     "outputNum" INTEGER NOT NULL;
