// from Node Modules
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
// from Own Modules
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { UsuarioProviders } from './providers/usuario.providers';
import { DatabaseModule } from './../../database/database.module';
import { PropietarioService } from '../propietario/propietario.service';
import { EmpleadoService } from '../empleado/empleado.service';
import { PropietarioProviders } from '../propietario/providers/propietario.providers';
import { EmpleadoProviders } from '../empleado/providers/empleado.providers';
import { ProfileService } from '../profile/profile.service';
import { ProfileProviders } from '../profile/providers/profile.providers';

@Module({
  imports: [HttpModule, DatabaseModule],
  controllers: [UsuarioController],
  providers: [UsuarioService, PropietarioService, EmpleadoService, ProfileService,
    ...UsuarioProviders, ...PropietarioProviders, ...EmpleadoProviders, ...ProfileProviders],
  exports: [UsuarioService],
})
export class UsuarioModule { }
