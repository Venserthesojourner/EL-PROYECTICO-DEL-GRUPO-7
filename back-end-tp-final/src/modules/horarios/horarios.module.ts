import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HorariosController } from './horarios.controller';
import { HorariosEntity } from './horarios.entity';
import { HorariosService } from './horarios.service';

@Module({
  imports: [TypeOrmModule.forFeature([HorariosEntity])],
  providers: [HorariosService],
  controllers: [HorariosController]
})
export class HorariosModule { }
