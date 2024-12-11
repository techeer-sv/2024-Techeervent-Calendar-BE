import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCalendarRequest {
    @ApiPropertyOptional({
        description: '유저 아이디',
        example: 1,
    })
    @Type(() => Number)
    @IsNumber()
    readonly userId: number;

    @ApiPropertyOptional({
        description: '출석 날짜 (일자만 입력)',
        example: 25,
    })
    @Type(() => Number)
    @IsNumber()
    readonly calendarDate: number;

    @ApiPropertyOptional({
        description: '질문 아이디',
        example: 1,
    })
    @Type(() => Number)
    @IsNumber()
    readonly questionId: number;

    @ApiPropertyOptional({
        description: '유저 답변',
        example:
            '테커벤트 정말 재밌네요! 앞으로도 이런 재밌는 프로젝트가 많아졌으면 좋겠습니다.',
    })
    @IsString()
    readonly calendarAnswer: string;
}
