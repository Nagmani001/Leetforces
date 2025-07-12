/*
  Warnings:

  - The primary key for the `ProblemStatus` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ProblemStatus` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProblemStatus" DROP CONSTRAINT "ProblemStatus_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "ProblemStatus_pkey" PRIMARY KEY ("userId", "problemId");

-- AddForeignKey
ALTER TABLE "ProblemStatus" ADD CONSTRAINT "ProblemStatus_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProblemStatus" ADD CONSTRAINT "ProblemStatus_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
