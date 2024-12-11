import { PrismaClient } from '@prisma/client';
import { Logger } from '@nestjs/common';

const prisma = new PrismaClient();

// 목데이터 추가
async function main(): Promise<void> {
    try {
        await prisma.$transaction(async (prisma) => {
            // 유저 데이터 추가
            const users = [
                {
                    userId: 1,
                    userName: '조하나',
                    userYear: 7,
                },
                {
                    userId: 2,
                    userName: '조하나',
                    userYear: 1,
                },
                {
                    userId: 3,
                    userName: '고예진',
                    userYear: 7,
                },
            ];

            const userInserts = users.map((user) =>
                prisma.user.create({
                    data: user,
                }),
            );

            // 캘린더 데이터 추가
            const calendars = [
                {
                    calendarDate: 25,
                    userId: 1, // 조하나 (userYear: 7)
                    questionId: 1, // 내년에는 어떤 습관을 기르고 싶나요?
                    calendarAnswer:
                        '일찍 일어나서 운동을 가는 습관을 기르고 싶습니다.',
                    drawId: 3, // 공차
                },
                {
                    calendarDate: 27,
                    userId: 1, // 조하나 (userYear: 7)
                    questionId: 2, // 2024년, 나를 가장 많이 웃게 한 일은 무엇인가요?
                    calendarAnswer:
                        '친구와 해외여행을 가서 원숭이쇼도 보고 매일매일 이슈가 있었습니다. 그 때 가장 많이 웃었던 것 같아요.',
                    drawId: 1, // 마켓컬리
                },
                {
                    calendarDate: 29,
                    userId: 1, // 조하나 (userYear: 7)
                    questionId: 4, // 올해 가장 기억에 남는 순간이 무엇인가요?
                    calendarAnswer:
                        '첫 면접을 보러가서 탈탈 털리면서 내가 얼마나 부족한지 뼈저리게 깨달았던 때가 기억에 남습니다.',
                    drawId: 3, // 공차
                },
                {
                    calendarDate: 25,
                    userId: 3, // 고예진 (userYear: 7)
                    questionId: 3, // 테커 활동 중 가장 뜻깊었던 순간은 언제인가요?
                    calendarAnswer:
                        '부트캠프에서 팀원들과 함께 매일 밤을 새면서 개발한 프로젝트를 발표까지 무사히 해낸 것이 가장 뜻 깊습니다!',
                    drawId: 2, // 스타벅스
                },
                {
                    calendarDate: 28,
                    userId: 3, // 고예진 (userYear: 7)
                    questionId: 5, // 2024년에 가장 도전적이었던 순간은 언제였나요?
                    calendarAnswer:
                        '연말 테커 프로젝트에 참여하겠다고 한 순간입니다.',
                },
            ];

            const calendarInserts = calendars.map((calendar) =>
                prisma.calendar.create({
                    data: calendar,
                }),
            );

            // 유저와 캘린더 데이터 삽입 실행
            await Promise.all([...userInserts, ...calendarInserts]);
            Logger.log('유저와 캘린더 데이터를 데이터베이스에 삽입했습니다.');
        });
    } catch (error) {
        Logger.error('데이터 삽입 중 오류가 발생했습니다.', error);
        throw error;
    } finally {
        await prisma.$disconnect();
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
