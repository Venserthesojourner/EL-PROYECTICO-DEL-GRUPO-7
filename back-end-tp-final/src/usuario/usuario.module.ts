import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { UsuarioProviders } from './providers/usuario.providers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { HttpModule } from '@nestjs/axios';
import { DatabaseModule } from './../utils/config/database/database.module';

@Module({
  imports: [
    HttpModule,
    DatabaseModule,
    TypeOrmModule.forFeature([Usuario])
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService, ...UsuarioProviders],
})
export class UsuarioModule { }
