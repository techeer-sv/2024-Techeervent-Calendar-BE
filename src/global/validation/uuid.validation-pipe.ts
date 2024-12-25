import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { validate as isUUID, version as getUUIDVersion } from 'uuid';

@Injectable()
export class UUIDValidationPipe implements PipeTransform {
    transform(value: string): string {
        if (!isUUID(value) || getUUIDVersion(value) !== 4) {
            throw new BadRequestException('유효한 UUID 형식이 아닙니다.');
        }
        return value;
    }
}
