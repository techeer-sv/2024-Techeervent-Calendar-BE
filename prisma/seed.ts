import { PrismaClient } from '@prisma/client';
import { Logger } from '@nestjs/common';

const prisma = new PrismaClient();

async function main(): Promise<void> {
    // 유저 데이터 추가
    // const users = [
    //     {
    //         userName: '조하나',
    //         userYear: 7,
    //     },
    //     {
    //         userName: '조하나',
    //         userYear: 1,
    //     },
    //     {
    //         userName: '고예진',
    //         userYear: 7,
    //     },
    // ];
    // const existingUsers = await prisma.user.count();
    // if (existingUsers === 0) {
    //     for (const user of users) {
    //         await prisma.user.create({
    //             data: user,
    //         });
    //     }
    //     Logger.log('유저 데이터를 데이터베이스에 삽입했습니다.');
    // } else {
    //     Logger.log('유저 데이터가 이미 존재하여 삽입을 건너뛰었습니다.');
    // }

    // 질문 데이터 추가
    const questions = [
        { questionContent: '내년에는 어떤 습관을 기르고 싶나요?' },
        { questionContent: '2024년, 나를 가장 많이 웃게 한 일은 무엇인가요?' },
        { questionContent: '테커 활동 중 가장 뜻깊었던 순간은 언제인가요?' },
        { questionContent: '올해 가장 기억에 남는 순간이 무엇인가요?' },
        { questionContent: '2024년에 가장 도전적이었던 순간은 언제였나요?' },
        { questionContent: '2024년 내가 가장 자주 들은 말은 무엇인가요?' },
        {
            questionContent:
                '올해 개발자로서 가장 성장했다고 느낀 순간은 언제인가요?',
        },
        { questionContent: '올해 나에게 가장 큰 영향을 준 사람은 누구인가요?' },
        {
            questionContent:
                '올해 진짜 고마웠던 사람한테 하고 싶은 말은 무엇인가요?',
        },
        { questionContent: '내년에 새롭게 도전해 보고 싶은 취미가 있나요?' },
        { questionContent: '올해에 이것만큼은 잘했다! 자랑 한 번 해볼까요?' },
        { questionContent: '나에게 테커란 무엇인가요?' },
        { questionContent: '2024년을 한 문장으로 표현해본다면 무엇인가요?' },
        { questionContent: '올해 나의 가장 큰 변화는 무엇인가요?' },
        { questionContent: '올해의 목표 달성치는 어떻게 되나요?' },
        { questionContent: '내년에 이루고 싶은 목표가 있나요?' },
        {
            questionContent:
                '올해 자신에게 점수를 준다면 몇 점인가요? 그리고 왜 그렇게 생각하나요?',
        },
        {
            questionContent:
                '올해 조금 아쉽다고 생각되는 점은 무엇이며, 내년에는 어떻게 바꾸고 싶나요?',
        },
        { questionContent: '올해 미뤄뒀던 일 중 하나를 뽑는다면 무엇인가요?' },
        { questionContent: '내년엔 꼭 고치고 싶은 단점은 무엇인가요?' },
        { questionContent: '내년 가장 기대되는 일이 무엇인가요?' },
        { questionContent: '"내년 이맘때의 나"에게 하고 싶은 말이 있나요?' },
        { questionContent: '올해 발견한 나의 장점은 무엇인가요?' },
        { questionContent: '올해의 자신을 5글자로 표현한다면 무엇인가요?' },
        { questionContent: '올해 나의 성장을 방해한 요소는 무엇인가요?' },
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
            drawName: '컬리 상품권 1만원',
            drawTotal: 3,
        },
        {
            drawId: 2,
            drawName: '컬리 캘린더',
            drawTotal: 3,
        },
        {
            drawId: 3,
            drawName: '비타 500',
            drawTotal: 30,
        },
        {
            drawId: 4,
            drawName: '현직자 스페셜 기프트',
            drawTotal: 5,
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
