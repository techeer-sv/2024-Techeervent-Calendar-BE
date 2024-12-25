import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsString, IsUUID, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { IsTrimmedNotEmpty } from '../../../../global/validation/isTrimmedNotEmpty';

export class CreateCalendarRequest {
    @ApiPropertyOptional({
        description: '유저 아이디',
        example: 'hashedUserId',
    })
    @IsString()
    @IsUUID('4', { message: 'userId는 유효한 UUID 형식이어야 합니다.' })
    readonly userId: string;

    @ApiPropertyOptional({
        description: '출석 날짜 (일자만 입력)',
        example: 25,
    })
    @Type(() => Number)
    @IsNumber()
    @Min(25, { message: '서비스 날짜는 25일부터 31일 입니다.' })
    @Max(31, { message: '서비스 날짜는 25일부터 31일 입니다.' })
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
    @IsTrimmedNotEmpty()
    readonly calendarAnswer: string;
}
