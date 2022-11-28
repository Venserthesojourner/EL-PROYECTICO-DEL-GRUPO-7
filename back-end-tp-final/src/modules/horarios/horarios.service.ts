import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HorariosEntity } from './horarios.entity';

@Injectable()
export class HorariosService extends TypeOrmCrudService<HorariosEntity>{

    constructor(@InjectRepository(HorariosEntity) repo) {
        super(repo);
    }

}
