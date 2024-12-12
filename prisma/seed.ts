import { PrismaClient } from '@prisma/client';
import { Logger } from '@nestjs/common';

const prisma = new PrismaClient();

async function main(): Promise<void> {
    // 질문 데이터 추가
    const questions = [
        { questionContent: '내년에는 어떤 습관을 기르고 싶나요?' },
        { questionContent: '2024년, 나를 가장 많이 웃게 한 일은 무엇인가요?' },
        { questionContent: '테커 활동 중 가장 뜻깊었던 순간은 언제인가요?' },
        { questionContent: '올해 가장 기억에 남는 순간이 무엇인가요?' },
        { questionContent: '2024년에 가장 도전적이었던 순간은 언제였나요?' },
    ];
    const existingQuestions = await prisma.question.count();
    if (existingQuestions === 0) {
        for (const question of questions) {
            await prisma.question.create({
                data: question,
            });
        }
        Logger.log('질문 데이터를 데이터베이스에 삽입했습니다.');
    } else {
        Logger.log('질문 데이터가 이미 존재하여 삽입을 건너뛰었습니다.');
    }

    // 경품 데이터 추가
    const draws = [
        {
            drawId: 1,
            drawName: '신라호텔 망고빙수',
            drawTotal: 3,
        },
        {
            drawId: 2,
            drawName: '컬리 상품권 100원',
            drawTotal: 1,
        },
        {
            drawId: 3,
            drawName: '연희동 프로필 촬영권',
            drawTotal: 3,
        },
        {
            drawId: 4,
            drawName: '두찜 500원 상품권',
            drawTotal: 6,
        },
    ];
    const existingDraws = await prisma.draw.count();
    if (existingDraws === 0) {
        for (const draw of draws) {
            await prisma.draw.create({
                data: draw,
            });
        }
        Logger.log('경품 데이터를 데이터베이스에 삽입했습니다.');
    } else {
        Logger.log('경품 데이터가 이미 존재하여 삽입을 건너뛰었습니다.');
    }
}

main()
    .catch((e) => {
        Logger.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
