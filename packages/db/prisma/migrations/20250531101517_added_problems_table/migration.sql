/*
  Warnings:

  - You are about to drop the column `Description` on the `Problem` table. All the data in the column will be lost.
  - Added the required column `DescriptionTop` to the `Problem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpuTimeLimit` to the `Problem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `memoryLimit` to the `Problem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Problem" DROP COLUMN "Description",
ADD COLUMN     "DescriptionBottom" TEXT,
ADD COLUMN     "DescriptionTop" TEXT NOT NULL,
ADD COLUMN     "cpuTimeLimit" INTEGER NOT NULL,
ADD COLUMN     "memoryLimit" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "BasicTestCases" (
    "id" TEXT NOT NULL,
    "input" TEXT NOT NULL,
    "output" TEXT NOT NULL,
    "problemId" TEXT NOT NULL,

    CONSTRAINT "BasicTestCases_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BasicTestCases" ADD CONSTRAINT "BasicTestCases_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
