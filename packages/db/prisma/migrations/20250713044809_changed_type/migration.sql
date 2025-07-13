/*
  Warnings:

  - You are about to drop the column `inputNum` on the `BasicTestCases` table. All the data in the column will be lost.
  - You are about to drop the column `outputNum` on the `BasicTestCases` table. All the data in the column will be lost.
  - You are about to drop the column `inputNum` on the `TestCase` table. All the data in the column will be lost.
  - You are about to drop the column `outputNum` on the `TestCase` table. All the data in the column will be lost.
  - Added the required column `inputTest` to the `BasicTestCases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outputTest` to the `BasicTestCases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inputTest` to the `TestCase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outputTest` to the `TestCase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BasicTestCases" DROP COLUMN "inputNum",
DROP COLUMN "outputNum",
ADD COLUMN     "inputTest" TEXT NOT NULL,
ADD COLUMN     "outputTest" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TestCase" DROP COLUMN "inputNum",
DROP COLUMN "outputNum",
ADD COLUMN     "inputTest" TEXT NOT NULL,
ADD COLUMN     "outputTest" TEXT NOT NULL;
