import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class GetAnswerRequest {
    @ApiPropertyOptional({
        description: '건너뛸 페이지 개수',
        example: 0,
    })
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    readonly page?: number;

    @ApiPropertyOptional({
        description: '가져올 데이터 개수',
        example: 10,
    })
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    readonly limit?: number;

    @ApiPropertyOptional({
        description: '검색할 작성자 명',
        example: '조하나',
    })
    @IsOptional()
    @IsString()
    readonly author?: string;
}
