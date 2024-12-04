import { Controller } from '@nestjs/common';
import { CalenderService } from './calender.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Calender')
@Controller('calender')
export class CalenderController {
    constructor(private readonly calenderService: CalenderService) {}
}
