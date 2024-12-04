import { Injectable } from '@nestjs/common';
import { CalenderRepository } from './repository/calender.repository';

@Injectable()
export class CalenderService {
    constructor(private readonly calenderRepository: CalenderRepository) {}
}
