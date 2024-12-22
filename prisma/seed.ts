import { PrismaClient } from '@prisma/client';
import { Logger } from '@nestjs/common';

const prisma = new PrismaClient();

async function main(): Promise<void> {
    // 유저 데이터 추가
    const users = [
        {
            userName: 'Andrew Park',
            userYear: 0,
        },
        {
            userName: '호선우',
            userYear: 0,
        },
        {
            userName: '김성한',
            userYear: 1,
        },
        {
            userName: '김재연',
            userYear: 1,
        },
        {
            userName: '김소미',
            userYear: 1,
        },
        {
            userName: '오현택',
            userYear: 1,
        },
        {
            userName: '양유진',
            userYear: 1,
        },
        {
            userName: '맹수연',
            userYear: 1,
        },
        {
            userName: '이유정',
            userYear: 1,
        },
        {
            userName: '김서영',
            userYear: 1,
        },
        {
            userName: '신은지',
            userYear: 1,
        },
        {
            userName: '서연주',
            userYear: 1,
        },
        {
            userName: 'Ryan Lee',
            userYear: 1,
        },
        {
            userName: '장동현',
            userYear: 1,
        },
        {
            userName: '김서경',
            userYear: 1,
        },
        {
            userName: '장현우',
            userYear: 1,
        },
        {
            userName: '김민웅',
            userYear: 1,
        },
        {
            userName: '정수빈',
            userYear: 1,
        },
        {
            userName: '최세연',
            userYear: 1,
        },
        {
            userName: '조윤근',
            userYear: 1,
        },
        {
            userName: '신영진',
            userYear: 1,
        },
        {
            userName: '김서연',
            userYear: 1,
        },
        {
            userName: '이승준',
            userYear: 1,
        },
        {
            userName: '이서현',
            userYear: 1,
        },
        {
            userName: '임성한',
            userYear: 1,
        },
        {
            userName: '김기현',
            userYear: 1,
        },
        {
            userName: '나승미',
            userYear: 1,
        },
        {
            userName: '박근우',
            userYear: 1,
        },
        {
            userName: '한승욱',
            userYear: 1,
        },
        {
            userName: '장수아',
            userYear: 1,
        },
        {
            userName: '오홍기',
            userYear: 1,
        },
        {
            userName: '김영준',
            userYear: 2,
        },
        {
            userName: '홍다연',
            userYear: 2,
        },
        {
            userName: '정태원',
            userYear: 2,
        },
        {
            userName: '김주원',
            userYear: 2,
        },
        {
            userName: '김혜린',
            userYear: 2,
        },
        {
            userName: '양지윤',
            userYear: 2,
        },
        {
            userName: '최우석',
            userYear: 2,
        },
        {
            userName: '유희진',
            userYear: 2,
        },
        {
            userName: '김의빈',
            userYear: 2,
        },
        {
            userName: '김하린',
            userYear: 3,
        },
        {
            userName: '고원준',
            userYear: 3,
        },
        {
            userName: '정길연',
            userYear: 3,
        },
        {
            userName: '진호병',
            userYear: 3,
        },
        {
            userName: '김인철',
            userYear: 3,
        },
        {
            userName: '이정우',
            userYear: 3,
        },
        {
            userName: '이채현',
            userYear: 3,
        },
        {
            userName: '한지원',
            userYear: 3,
        },
        {
            userName: '최준혁',
            userYear: 3,
        },
        {
            userName: '박성빈',
            userYear: 3,
        },
        {
            userName: '동승현',
            userYear: 3,
        },
        {
            userName: '박준혁',
            userYear: 3,
        },
        {
            userName: '정훈희',
            userYear: 3,
        },
        {
            userName: '정윤호',
            userYear: 3,
        },
        {
            userName: '최현정',
            userYear: 3,
        },
        {
            userName: '김유림',
            userYear: 3,
        },
        {
            userName: '홍성민',
            userYear: 3,
        },
        {
            userName: '배준일',
            userYear: 3,
        },
        {
            userName: '최지미',
            userYear: 4,
        },
        {
            userName: '김정현',
            userYear: 4,
        },
        {
            userName: '이상민',
            userYear: 4,
        },
        {
            userName: '이승환',
            userYear: 4,
        },
        {
            userName: '최태현',
            userYear: 4,
        },
        {
            userName: '이수현',
            userYear: 4,
        },
        {
            userName: '정혜린',
            userYear: 5,
        },
        {
            userName: '이규현',
            userYear: 5,
        },
        {
            userName: '이지원',
            userYear: 5,
        },
        {
            userName: '박소윤',
            userYear: 5,
        },
        {
            userName: '김동헌',
            userYear: 5,
        },
        {
            userName: '이준희',
            userYear: 5,
        },
        {
            userName: '조상아',
            userYear: 5,
        },
        {
            userName: '강용민',
            userYear: 5,
        },
        {
            userName: '백동열',
            userYear: 5,
        },
        {
            userName: '김주희',
            userYear: 5,
        },
        {
            userName: '김대희',
            userYear: 5,
        },
        {
            userName: '박수연',
            userYear: 5,
        },
        {
            userName: '이수림',
            userYear: 5,
        },
        {
            userName: '박경은',
            userYear: 5,
        },
        {
            userName: '김정연',
            userYear: 5,
        },
        {
            userName: '백한결',
            userYear: 5,
        },
        {
            userName: '조은주',
            userYear: 5,
        },
        {
            userName: '고경철',
            userYear: 5,
        },
        {
            userName: '유건',
            userYear: 5,
        },
        {
            userName: '박희경',
            userYear: 5,
        },
        {
            userName: '전종훈',
            userYear: 5,
        },
        {
            userName: '정종윤',
            userYear: 5,
        },
        {
            userName: '송지민',
            userYear: 5,
        },
        {
            userName: '권광재',
            userYear: 5,
        },
        {
            userName: '김유라',
            userYear: 5,
        },
        {
            userName: '강민아',
            userYear: 5,
        },
        {
            userName: '한정욱',
            userYear: 5,
        },
        {
            userName: '이지은',
            userYear: 6,
        },
        {
            userName: '백유진',
            userYear: 6,
        },
        {
            userName: '윤정은',
            userYear: 6,
        },
        {
            userName: '임아정',
            userYear: 6,
        },
        {
            userName: '양소연',
            userYear: 6,
        },
        {
            userName: '김주호',
            userYear: 6,
        },
        {
            userName: '황장현',
            userYear: 6,
        },
        {
            userName: '곽소정',
            userYear: 6,
        },
        {
            userName: '김민지',
            userYear: 6,
        },
        {
            userName: '정재빈',
            userYear: 6,
        },
        {
            userName: '전병선',
            userYear: 6,
        },
        {
            userName: '이서인',
            userYear: 6,
        },
        {
            userName: '김예빈',
            userYear: 6,
        },
        {
            userName: '조희은',
            userYear: 6,
        },
        {
            userName: '황희상',
            userYear: 6,
        },
        {
            userName: '하재민',
            userYear: 6,
        },
        {
            userName: '장아령',
            userYear: 6,
        },
        {
            userName: '김주언',
            userYear: 6,
        },
        {
            userName: '유재윤',
            userYear: 6,
        },
        {
            userName: '김선재',
            userYear: 6,
        },
        {
            userName: '이동우',
            userYear: 6,
        },
        {
            userName: '박진우',
            userYear: 6,
        },
        {
            userName: '박준서',
            userYear: 6,
        },
        {
            userName: '임지훈',
            userYear: 6,
        },
        {
            userName: '정우희',
            userYear: 6,
        },
        {
            userName: '윤일권',
            userYear: 6,
        },
        {
            userName: '강석규',
            userYear: 6,
        },
        {
            userName: '김미영',
            userYear: 6,
        },
        {
            userName: '이민기',
            userYear: 6,
        },
        {
            userName: '김가을',
            userYear: 6,
        },
        {
            userName: '권찬영',
            userYear: 6,
        },
        {
            userName: '안나경',
            userYear: 6,
        },
        {
            userName: '윤영세',
            userYear: 6,
        },
        {
            userName: '조성현',
            userYear: 6,
        },
        {
            userName: '최세엽',
            userYear: 6,
        },
        {
            userName: '박세종',
            userYear: 6,
        },
        {
            userName: '송유림',
            userYear: 6,
        },
        {
            userName: '김진용',
            userYear: 7,
        },
        {
            userName: '이도경',
            userYear: 7,
        },
        {
            userName: '백지윤',
            userYear: 7,
        },
        {
            userName: '조하나',
            userYear: 7,
        },
        {
            userName: '조준영',
            userYear: 7,
        },
        {
            userName: '이수민',
            userYear: 7,
        },
        {
            userName: '윤주원',
            userYear: 7,
        },
        {
            userName: '조진우',
            userYear: 7,
        },
        {
            userName: '민정준',
            userYear: 7,
        },
        {
            userName: '상필진',
            userYear: 7,
        },
        {
            userName: '주영준',
            userYear: 7,
        },
        {
            userName: '한승철',
            userYear: 7,
        },
        {
            userName: '김진우',
            userYear: 7,
        },
        {
            userName: '설한나',
            userYear: 7,
        },
        {
            userName: '이강욱',
            userYear: 7,
        },
        {
            userName: '최수하',
            userYear: 7,
        },
        {
            userName: '장정운',
            userYear: 7,
        },
        {
            userName: '정유진',
            userYear: 7,
        },
        {
            userName: '최종민',
            userYear: 7,
        },
        {
            userName: '김광현',
            userYear: 7,
        },
        {
            userName: '이현진',
            userYear: 7,
        },
        {
            userName: '김민성',
            userYear: 7,
        },
        {
            userName: '정세훈',
            userYear: 7,
        },
        {
            userName: '강정현',
            userYear: 7,
        },
        {
            userName: '이상훈',
            userYear: 7,
        },
        {
            userName: '신수진',
            userYear: 7,
        },
        {
            userName: '이윤서',
            userYear: 7,
        },
        {
            userName: '고예진',
            userYear: 7,
        },
        {
            userName: '박수연',
            userYear: 7,
        },
        {
            userName: '문성현',
            userYear: 7,
        },
        {
            userName: '강지은',
            userYear: 7,
        },
        {
            userName: '고재훈',
            userYear: 7,
        },
        {
            userName: '최지혜',
            userYear: 7,
        },
        {
            userName: '김민기',
            userYear: 7,
        },
        {
            userName: '임동민',
            userYear: 7,
        },
        {
            userName: '김우성',
            userYear: 7,
        },
        {
            userName: '김태호',
            userYear: 8,
        },
        {
            userName: '김보배',
            userYear: 8,
        },
        {
            userName: '임동연',
            userYear: 8,
        },
        {
            userName: '이상진',
            userYear: 8,
        },
        {
            userName: '김윤기',
            userYear: 8,
        },
        {
            userName: '이동준',
            userYear: 8,
        },
        {
            userName: '박유경',
            userYear: 8,
        },
        {
            userName: '이슬아',
            userYear: 8,
        },
        {
            userName: '강기환',
            userYear: 8,
        },
        {
            userName: '김진희',
            userYear: 8,
        },
        {
            userName: '한현승',
            userYear: 8,
        },
        {
            userName: '박성현',
            userYear: 8,
        },
        {
            userName: '박근채',
            userYear: 8,
        },
        {
            userName: '신정호',
            userYear: 8,
        },
        {
            userName: '김홍석',
            userYear: 8,
        },
        {
            userName: '강재훈',
            userYear: 8,
        },
        {
            userName: '서지민',
            userYear: 8,
        },
        {
            userName: '손석영',
            userYear: 8,
        },
        {
            userName: '김종연',
            userYear: 8,
        },
        {
            userName: '이연규',
            userYear: 8,
        },
        {
            userName: '김지민',
            userYear: 8,
        },
        {
            userName: '연경수',
            userYear: 8,
        },
        {
            userName: '박보성',
            userYear: 8,
        },
        {
            userName: '정언준',
            userYear: 8,
        },
        {
            userName: '박우현',
            userYear: 8,
        },
    ];
    const existingUsers = await prisma.user.count();
    if (existingUsers === 0) {
        for (const user of users) {
            await prisma.user.create({
                data: user,
            });
        }
        Logger.log('유저 데이터를 데이터베이스에 삽입했습니다.');
    } else {
        Logger.log('유저 데이터가 이미 존재하여 삽입을 건너뛰었습니다.');
    }

    // 질문 데이터 추가
    const questions = [
        {
            questionId: 1,
            questionContent: '내년에는 어떤 습관을 기르고 싶나요?',
        },
        {
            questionId: 2,
            questionContent: '2024년, 나를 가장 많이 웃게 한 일은 무엇인가요?',
        },
        {
            questionId: 3,
            questionContent: '테커 활동 중 가장 뜻깊었던 순간은 언제인가요?',
        },
        {
            questionId: 4,
            questionContent: '올해 가장 기억에 남는 순간이 무엇인가요?',
        },
        {
            questionId: 5,
            questionContent: '2024년에 가장 도전적이었던 순간은 언제였나요?',
        },
        {
            questionId: 6,
            questionContent: '2024년 내가 가장 자주 들은 말은 무엇인가요?',
        },
        {
            questionId: 7,
            questionContent:
                '올해 개발자로서 가장 성장했다고 느낀 순간은 언제인가요?',
        },
        {
            questionId: 8,
            questionContent: '올해 나에게 가장 큰 영향을 준 사람은 누구인가요?',
        },
        {
            questionId: 9,
            questionContent:
                '올해 진짜 고마웠던 사람한테 하고 싶은 말은 무엇인가요?',
        },
        {
            questionId: 10,
            questionContent: '내년에 새롭게 도전해 보고 싶은 취미가 있나요?',
        },
        {
            questionId: 11,
            questionContent: '올해에 이것만큼은 잘했다! 자랑 한 번 해볼까요?',
        },
        {
            questionId: 12,
            questionContent: '나에게 테커란 무엇인가요?',
        },
        {
            questionId: 13,
            questionContent: '2024년을 한 문장으로 표현해본다면 무엇인가요?',
        },
        {
            questionId: 14,
            questionContent: '올해 나의 가장 큰 변화는 무엇인가요?',
        },
        {
            questionId: 15,
            questionContent: '올해의 목표 달성치는 어떻게 되나요?',
        },
        {
            questionId: 16,
            questionContent: '내년에 이루고 싶은 목표가 있나요?',
        },
        {
            questionId: 17,
            questionContent:
                '올해 자신에게 점수를 준다면 몇 점인가요? 그리고 왜 그렇게 생각하나요?',
        },
        {
            questionId: 18,
            questionContent:
                '올해 조금 아쉽다고 생각되는 점은 무엇이며, 내년에는 어떻게 바꾸고 싶나요?',
        },
        {
            questionId: 19,
            questionContent: '올해 미뤄뒀던 일 중 하나를 뽑는다면 무엇인가요?',
        },
        {
            questionId: 20,
            questionContent: '내년엔 꼭 고치고 싶은 단점은 무엇인가요?',
        },
        {
            questionId: 21,
            questionContent: '내년 가장 기대되는 일이 무엇인가요?',
        },
        {
            questionId: 22,
            questionContent: '"내년 이맘때의 나"에게 하고 싶은 말이 있나요?',
        },
        {
            questionId: 23,
            questionContent: '올해 발견한 나의 장점은 무엇인가요?',
        },
        {
            questionId: 24,
            questionContent: '올해의 자신을 5글자로 표현한다면 무엇인가요?',
        },
        {
            questionId: 25,
            questionContent: '올해 나의 성장을 방해한 요소는 무엇인가요?',
        },
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
