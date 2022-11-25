import { Module } from '@nestjs/common';
import { EstacionamientoService } from './estacionamiento.service';
import { EstacionamientoController } from './estacionamiento.controller';
import { EstacionamientoProviders } from './providers/estacionamiento.providers';
import { EmpleadoService } from '../empleado/empleado.service';
import { EmpleadoProviders } from '../empleado/providers/empleado.providers';

@Module({
  controllers: [EstacionamientoController],
  providers: [EstacionamientoService, EmpleadoService, ...EstacionamientoProviders, ...EmpleadoProviders]
})
export class EstacionamientoModule { }
