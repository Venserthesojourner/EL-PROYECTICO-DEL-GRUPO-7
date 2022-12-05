/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';
import { EmpleadoController } from './empleado.controller';
import { EmpleadoProviders } from './providers/empleado.providers';
import { EstacionamientoProviders } from '../estacionamiento/providers/estacionamiento.providers';
import { EstacionamientoService } from '../estacionamiento/estacionamiento.service';

@Module({
  controllers: [EmpleadoController],
  providers: [EmpleadoService, EstacionamientoService, ...EmpleadoProviders, ...EstacionamientoProviders],
  exports: [EmpleadoService],
})
export class EmpleadoModule { }
