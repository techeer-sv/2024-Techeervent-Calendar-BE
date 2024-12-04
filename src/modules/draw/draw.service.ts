import { Injectable } from '@nestjs/common';
import { DrawRepository } from './repository/draw.repository';

@Injectable()
export class DrawService {
    constructor(private readonly drawRepository: DrawRepository) {}
}
