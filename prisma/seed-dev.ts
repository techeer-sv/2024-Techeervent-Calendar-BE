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
                        userId: 7,
                        userName: 'Andrew',
                        userYear: 0,
                    },
                    {
                        userId: 1,
                        userName: '조하나',
                        userYear: 7,
                    },
                    {
                        userId: 2,
                        userName: '조하나', // 동명이인 케이스
                        userYear: 1,
                    },
                    {
                        userId: 3,
                        userName: '고예진',
                        userYear: 7,
                    },
                    {
                        userId: 4,
                        userName: '이상민',
                        userYear: 4,
                    },
                    {
                        userId: 5,
                        userName: '조진우',
                        userYear: 7,
                    },
                    {
                        userId: 6,
                        userName: '이승환',
                        userYear: 4,
                    },
                ];
                const userInserts = users.map((user) =>
                    tx.user.create({
                        data: user,
                    }),
                );
                await Promise.all(userInserts);
                Logger.log('6개의 유저 데이터를 데이터베이스에 삽입했습니다.');
            } else {
                Logger.log(
                    '유저 테이블에 데이터가 이미 존재합니다. 삽입을 건너뜁니다.',
                );
            }

            // 캘린더 테이블에 데이터가 있는지 확인
            const calendarCount = await tx.calendar.count();
            if (calendarCount === 0) {
                const calendars = [
                    // User 1 : 조하나 (7기) 6개
                    {
                        calendarDate: 25,
                        userId: 1,
                        questionId: 1,
                        calendarAnswer:
                            '내년에는 아침 6시에 일어나는 습관을 기르고 싶습니다.',
                        drawId: 1,
                    },
                    {
                        calendarDate: 26,
                        userId: 1,
                        questionId: 2,
                        calendarAnswer:
                            '친구들과 함께 간 캠핑 여행에서 웃음이 끊이지 않았습니다.',
                    },
                    {
                        calendarDate: 27,
                        userId: 1,
                        questionId: 3,
                        calendarAnswer:
                            '테커 프로젝트를 성공적으로 마무리한 것이 가장 뜻깊었습니다.',
                    },
                    {
                        calendarDate: 28,
                        userId: 1,
                        questionId: 4,
                        calendarAnswer:
                            '첫 면접에서의 경험이 가장 기억에 남습니다.',
                        drawId: 2,
                    },
                    {
                        calendarDate: 29,
                        userId: 1,
                        questionId: 5,
                        calendarAnswer:
                            '테커 발표 준비 과정에서 어려움을 극복했던 순간이 도전적이었습니다.',
                        drawId: 3,
                    },
                    {
                        calendarDate: 31,
                        userId: 1,
                        questionId: 7,
                        calendarAnswer:
                            '올해 개발자로서 가장 성장했던 순간은 협업 프로젝트를 진행할 때였습니다.',
                    },
                    // User 2 : 조하나 (1기) 6개
                    {
                        calendarDate: 25,
                        userId: 2,
                        questionId: 1,
                        calendarAnswer:
                            '내년에는 아침 6시에 일어나는 습관을 기르고 싶습니다.',
                        drawId: 1,
                    },
                    {
                        calendarDate: 26,
                        userId: 2,
                        questionId: 2,
                        calendarAnswer:
                            '친구들과 함께 간 캠핑 여행에서 웃음이 끊이지 않았습니다.',
                    },
                    {
                        calendarDate: 27,
                        userId: 2,
                        questionId: 3,
                        calendarAnswer:
                            '테커 프로젝트를 성공적으로 마무리한 것이 가장 뜻깊었습니다.',
                    },
                    {
                        calendarDate: 28,
                        userId: 2,
                        questionId: 4,
                        calendarAnswer:
                            '첫 면접에서의 경험이 가장 기억에 남습니다.',
                        drawId: 2,
                    },
                    {
                        calendarDate: 29,
                        userId: 2,
                        questionId: 5,
                        calendarAnswer:
                            '테커 발표 준비 과정에서 어려움을 극복했던 순간이 도전적이었습니다.',
                        drawId: 3,
                    },
                    {
                        calendarDate: 31,
                        userId: 2,
                        questionId: 7,
                        calendarAnswer:
                            '올해 개발자로서 가장 성장했던 순간은 협업 프로젝트를 진행할 때였습니다.',
                    },
                    // User 3 : 고예진 (7기) 4개
                    {
                        calendarDate: 26,
                        userId: 3,
                        questionId: 16,
                        calendarAnswer:
                            '내년에는 테커 프로젝트를 완벽하게 마무리하고 싶습니다.',
                    },
                    {
                        calendarDate: 28,
                        userId: 3,
                        questionId: 18,
                        calendarAnswer: '시간 관리를 더 철저히 하고 싶습니다.',
                        drawId: 4,
                    },
                    {
                        calendarDate: 29,
                        userId: 3,
                        questionId: 19,
                        calendarAnswer:
                            '미뤄뒀던 영어 공부를 내년에 꼭 하고 싶습니다.',
                    },
                    {
                        calendarDate: 31,
                        userId: 3,
                        questionId: 21,
                        calendarAnswer:
                            '테커 발표를 마친 후 휴식을 가장 기대하고 있습니다.',
                    },
                    // User 4 : 이상민 (4기) 5개
                    {
                        calendarDate: 25,
                        userId: 4,
                        questionId: 22,
                        calendarAnswer:
                            '내년 이맘때의 나는 더 성장했을 것 같습니다.',
                    },
                    {
                        calendarDate: 27,
                        userId: 4,
                        questionId: 24,
                        calendarAnswer:
                            '올해를 5글자로 표현하면 "열심히 했다"입니다.',
                    },
                    {
                        calendarDate: 28,
                        userId: 4,
                        questionId: 25,
                        calendarAnswer:
                            '나의 성장을 방해했던 요소는 나태함입니다.',
                    },
                    {
                        calendarDate: 29,
                        userId: 4,
                        questionId: 20,
                        calendarAnswer:
                            '내년에는 계획대로 움직이는 습관을 기르고 싶습니다.',
                        drawId: 3,
                    },
                    {
                        calendarDate: 31,
                        userId: 4,
                        questionId: 22,
                        calendarAnswer:
                            '내년 이맘때의 나는 더 단단해져 있을 것 같습니다.',
                    },
                    // User 5 : 조진우 (7기) 6개
                    {
                        calendarDate: 25,
                        userId: 5,
                        questionId: 9,
                        calendarAnswer:
                            '올해 가장 고마운 사람은 저를 응원해준 동료들입니다.',
                    },
                    {
                        calendarDate: 26,
                        userId: 5,
                        questionId: 13,
                        calendarAnswer:
                            '2024년은 "변화의 해"라고 표현할 수 있습니다.',
                    },
                    {
                        calendarDate: 27,
                        userId: 5,
                        questionId: 1,
                        calendarAnswer:
                            '내년에 꾸준히 운동하는 습관을 기르고 싶습니다.',
                    },
                    {
                        calendarDate: 29,
                        userId: 5,
                        questionId: 8,
                        calendarAnswer:
                            '가족의 응원이 가장 큰 힘이 되었습니다.',
                        drawId: 2,
                    },
                    {
                        calendarDate: 30,
                        userId: 5,
                        questionId: 10,
                        calendarAnswer:
                            '내년에 요리라는 새로운 취미를 도전하고 싶습니다.',
                    },
                    {
                        calendarDate: 31,
                        userId: 5,
                        questionId: 12,
                        calendarAnswer:
                            '테커는 저에게 도전과 성장의 기회였습니다.',
                    },
                    // User 6 : 이승환 (4기) 7개
                    {
                        calendarDate: 25,
                        userId: 6,
                        questionId: 13,
                        calendarAnswer:
                            '2024년은 "배움의 해"로 기억될 것 같습니다.',
                    },
                    {
                        calendarDate: 26,
                        userId: 6,
                        questionId: 21,
                        calendarAnswer:
                            '내년에는 새로운 팀과의 협업이 기대됩니다.',
                    },
                    {
                        calendarDate: 27,
                        userId: 6,
                        questionId: 16,
                        calendarAnswer:
                            '내년에는 더 책임감 있는 모습을 보이고 싶습니다.',
                    },
                    {
                        calendarDate: 28,
                        userId: 6,
                        questionId: 19,
                        calendarAnswer:
                            '내년에는 미뤄뒀던 여행을 꼭 떠나고 싶습니다.',
                    },
                    {
                        calendarDate: 29,
                        userId: 6,
                        questionId: 21,
                        calendarAnswer:
                            '내년에는 새로운 팀과의 협업이 기대됩니다.',
                    },
                    {
                        calendarDate: 30,
                        userId: 6,
                        questionId: 23,
                        calendarAnswer:
                            '올해 발견한 나의 장점은 빠른 적응력입니다.',
                    },
                    {
                        calendarDate: 31,
                        userId: 6,
                        questionId: 25,
                        calendarAnswer:
                            '올해를 5글자로 표현하면 "한 걸음 더"입니다.',
                    },
                    // User 7 : Andrew (0기) 7개
                    {
                        calendarDate: 25,
                        userId: 7,
                        questionId: 9,
                        calendarAnswer:
                            '올해 가장 고마운 사람은 저를 응원해준 동료들입니다.',
                    },
                    {
                        calendarDate: 26,
                        userId: 7,
                        questionId: 13,
                        calendarAnswer:
                            '2024년은 "변화의 해"라고 표현할 수 있습니다.',
                    },
                    {
                        calendarDate: 27,
                        userId: 7,
                        questionId: 1,
                        calendarAnswer:
                            '내년에 꾸준히 운동하는 습관을 기르고 싶습니다.',
                    },
                    {
                        calendarDate: 28,
                        userId: 7,
                        questionId: 13,
                        calendarAnswer:
                            '2024년은 "변화의 해"라고 표현할 수 있습니다.',
                    },
                    {
                        calendarDate: 29,
                        userId: 7,
                        questionId: 8,
                        calendarAnswer:
                            '가족의 응원이 가장 큰 힘이 되었습니다.',
                        drawId: 2,
                    },
                    {
                        calendarDate: 30,
                        userId: 7,
                        questionId: 10,
                        calendarAnswer:
                            '내년에 요리라는 새로운 취미를 도전하고 싶습니다.',
                    },
                    {
                        calendarDate: 31,
                        userId: 7,
                        questionId: 12,
                        calendarAnswer:
                            '테커는 저에게 도전과 성장의 기회였습니다.',
                    },
                ];
                const calendarInserts = calendars.map((calendar) =>
                    tx.calendar.create({
                        data: calendar,
                    }),
                );
                await Promise.all(calendarInserts);
                Logger.log(
                    '41개의 캘린더 데이터를 데이터베이스에 삽입했습니다.',
                );
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
