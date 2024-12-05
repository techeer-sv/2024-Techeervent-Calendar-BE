-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "userName" VARCHAR(20) NOT NULL,
    "userYear" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Calender" (
    "calenderId" SERIAL NOT NULL,
    "calenderDate" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "calenderAnswer" VARCHAR(1000) NOT NULL,

    CONSTRAINT "Calender_pkey" PRIMARY KEY ("calenderId")
);

-- CreateTable
CREATE TABLE "Draw" (
    "drawId" SERIAL NOT NULL,
    "drawName" VARCHAR(100) NOT NULL,
    "drawTotal" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Draw_pkey" PRIMARY KEY ("drawId")
);

-- CreateTable
CREATE TABLE "Winning" (
    "winningId" SERIAL NOT NULL,
    "drawId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "calenderId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Winning_pkey" PRIMARY KEY ("winningId")
);

-- CreateTable
CREATE TABLE "Question" (
    "questionId" SERIAL NOT NULL,
    "questionContent" VARCHAR(300) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("questionId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Winning_calenderId_key" ON "Winning"("calenderId");

-- AddForeignKey
ALTER TABLE "Calender" ADD CONSTRAINT "Calender_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Calender" ADD CONSTRAINT "Calender_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("questionId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Winning" ADD CONSTRAINT "Winning_drawId_fkey" FOREIGN KEY ("drawId") REFERENCES "Draw"("drawId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Winning" ADD CONSTRAINT "Winning_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Winning" ADD CONSTRAINT "Winning_calenderId_fkey" FOREIGN KEY ("calenderId") REFERENCES "Calender"("calenderId") ON DELETE RESTRICT ON UPDATE CASCADE;
