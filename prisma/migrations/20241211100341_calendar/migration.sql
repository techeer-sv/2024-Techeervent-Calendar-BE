/*
  Warnings:

  - You are about to drop the `Winning` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Winning" DROP CONSTRAINT "Winning_calendarId_fkey";

-- DropForeignKey
ALTER TABLE "Winning" DROP CONSTRAINT "Winning_drawId_fkey";

-- DropForeignKey
ALTER TABLE "Winning" DROP CONSTRAINT "Winning_userId_fkey";

-- AlterTable
ALTER TABLE "Calendar" ADD COLUMN     "drawId" INTEGER;

-- DropTable
DROP TABLE "Winning";

-- AddForeignKey
ALTER TABLE "Calendar" ADD CONSTRAINT "Calendar_drawId_fkey" FOREIGN KEY ("drawId") REFERENCES "Draw"("drawId") ON DELETE SET NULL ON UPDATE CASCADE;
