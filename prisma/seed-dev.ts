import { PrismaClient } from '@prisma/client';
import { Logger } from '@nestjs/common';

const prisma = new PrismaClient();

// 목데이터 추가
async function main(): Promise<void> {
    // 목업 유저 데이터 추가
    const users = [
        {
            userName: '조하나',
            userYear: 7,
        },
        {
            userName: '조하나',
            userYear: 1,
        },
        {
            userName: '고예진',
            userYear: 7,
        },
    ];
    for (const user of users) {
        await prisma.user.create({
            data: user,
        });
    }
    Logger.log('유저 데이터를 데이터베이스에 삽입했습니다.');

    // 목업 캘린더 데이터 추가
    const calenders = [
        {
            calenderId: 1,
            calenderDate: 25,
            userId: 1, // 조하나 (userYear: 7)
            questionId: 1, // 내년에는 어떤 습관을 기르고 싶나요?
            calenderAnswer: '일찍 일어나서 운동을 가는 습관을 기르고 싶습니다.',
        },
        {
            calenderId: 2,
            calenderDate: 27,
            userId: 1, // 조하나 (userYear: 7)
            questionId: 2, // 2024년, 나를 가장 많이 웃게 한 일은 무엇인가요?
            calenderAnswer:
                '친구와 해외여행을 가서 원숭이쇼도 보고 매일매일 이슈가 있었습니다. 그 때 가장 많이 웃었던 것 같아요.',
        },
        {
            calenderId: 3,
            calenderDate: 29,
            userId: 1, // 조하나 (userYear: 7)
            questionId: 4, // 올해 가장 기억에 남는 순간이 무엇인가요?
            calenderAnswer:
                '첫 면접을 보러가서 탈탈 털리면서 내가 얼마나 부족한지 뼈저리게 깨달았던 때가 기억에 남습니다.',
        },
        {
            calenderId: 4,
            calenderDate: 25,
            userId: 3, // 고예진 (userYear: 7)
            questionId: 3, // 테커 활동 중 가장 뜻깊었던 순간은 언제인가요?
            calenderAnswer:
                '부트캠프에서 팀원들과 함께 매일 밤을 새면서 개발한 프로젝트를 발표까지 무사히 해낸 것이 가장 뜻 깊습니다!',
        },
        {
            calenderId: 5,
            calenderDate: 28,
            userId: 3, // 고예진 (userYear: 7)
            questionId: 5, // 2024년에 가장 도전적이었던 순간은 언제였나요?
            calenderAnswer: '연말 테커 프로젝트에 참여하겠다고 한 순간입니다.',
        },
    ];
    for (const calender of calenders) {
        await prisma.calender.create({
            data: calender,
        });
    }
    Logger.log('캘린더 데이터를 데이터베이스에 삽입했습니다.');

    // 목업 당첨 데이터 추가
    const winnings = [
        {
            drawId: 3, // 공차
            userId: 1, // 조하나 (userYear: 7)
            calenderId: 1, // 25일
        },
        {
            drawId: 1, // 마켓컬리
            userId: 1, // 조하나 (userYear: 7)
            calenderId: 2, // 27일
        },
        {
            drawId: 2, // 스타벅스
            userId: 3, // 고예진 (userYear: 7)
            calenderId: 1, // 25일
        },
        {
            drawId: 3, // 공차
            userId: 2, // 조하나 (userYear: 1)
            calenderId: 1, // 25일
        },
    ];
    for (const winning of winnings) {
        await prisma.winning.create({
            data: winning,
        });
    }
    Logger.log('당첨 데이터를 데이터베이스에 삽입했습니다.');
}

main()
    .catch((e) => {
        Logger.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
