import { PrismaClient } from '@prisma/client';
import { Logger } from '@nestjs/common';

const prisma = new PrismaClient();

// 목데이터 추가
async function main(): Promise<void> {
    try {
        await prisma.$transaction(async (tx) => {
            // 유저 테이블에 데이터가 있는지 확인
            const userCount = await tx.user.count();
            if (userCount === 0) {
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
                    tx.user.create({
                        data: user,
                    }),
                );
                await Promise.all(userInserts);
                Logger.log('유저 데이터를 데이터베이스에 삽입했습니다.');
            } else {
                Logger.log(
                    '유저 테이블에 데이터가 이미 존재합니다. 삽입을 건너뜁니다.',
                );
            }

            // 캘린더 테이블에 데이터가 있는지 확인
            const calendarCount = await tx.calendar.count();
            if (calendarCount === 0) {
                const calendars = [
                    {
                        calendarDate: 25,
                        userId: 1,
                        questionId: 1,
                        calendarAnswer:
                            '일찍 일어나서 운동을 가는 습관을 기르고 싶습니다.',
                        drawId: 3,
                    },
                    {
                        calendarDate: 27,
                        userId: 1,
                        questionId: 2,
                        calendarAnswer:
                            '친구와 해외여행을 가서 원숭이쇼도 보고 매일매일 이슈가 있었습니다. 그 때 가장 많이 웃었던 것 같아요.',
                        drawId: 1,
                    },
                    {
                        calendarDate: 29,
                        userId: 1,
                        questionId: 4,
                        calendarAnswer:
                            '첫 면접을 보러가서 탈탈 털리면서 내가 얼마나 부족한지 뼈저리게 깨달았던 때가 기억에 남습니다.',
                        drawId: 3,
                    },
                    {
                        calendarDate: 25,
                        userId: 3,
                        questionId: 3,
                        calendarAnswer:
                            '부트캠프에서 팀원들과 함께 매일 밤을 새면서 개발한 프로젝트를 발표까지 무사히 해낸 것이 가장 뜻 깊습니다!',
                        drawId: 2,
                    },
                    {
                        calendarDate: 28,
                        userId: 3,
                        questionId: 5,
                        calendarAnswer:
                            '연말 테커 프로젝트에 참여하겠다고 한 순간입니다.',
                    },
                ];
                const calendarInserts = calendars.map((calendar) =>
                    tx.calendar.create({
                        data: calendar,
                    }),
                );
                await Promise.all(calendarInserts);
                Logger.log('캘린더 데이터를 데이터베이스에 삽입했습니다.');
            } else {
                Logger.log(
                    '캘린더 테이블에 데이터가 이미 존재합니다. 삽입을 건너뜁니다.',
                );
            }
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
