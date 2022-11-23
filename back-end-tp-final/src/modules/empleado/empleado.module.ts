/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';
import { EmpleadoController } from './empleado.controller';
import { EmpleadoProviders } from './providers/empleado.providers';
import { EstacionamientoController } from '../estacionamiento/estacionamiento.controller';

@Module({
  controllers: [EmpleadoController, EstacionamientoController],
  providers: [EmpleadoService, ...EmpleadoProviders],
  exports: [EmpleadoService],
})
export class EmpleadoModule { }
