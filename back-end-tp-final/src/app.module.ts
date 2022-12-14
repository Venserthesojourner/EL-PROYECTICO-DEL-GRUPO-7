// from Node Modules
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// MODULES
import { DatabaseModule } from './database/database.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { PropietarioModule } from './modules/propietario/propietario.module';
// VARIABLE UTILS
import { enviroments } from './commons/enums/enviroments.enum';
import { EmpleadoModule } from './modules/empleado/empleado.module';
import { MailModule } from './mail/mail.module';
import { EstacionamientoModule } from './modules/estacionamiento/estacionamiento.module';
import endpointConfig from './config/endpoint.config';
import databaseConfig from './config/database.config';
import mailerConfig from './config/mailer.config';
import { ProfileModule } from './modules/profile/profile.module';
import { PromocionesModule } from './modules/promocion/promocion.module';
import { VehiculoModule } from './modules/vehiculo/vehiculo.module';
import { PlanMensualModule } from './modules/plan-mensual/plan-mensual.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [endpointConfig, databaseConfig, mailerConfig],
      isGlobal: true,
    }),
    //ScheduleModule.forRoot(), (Cuando agregue schedules)
    DatabaseModule,
    UsuarioModule,
    PropietarioModule,
    EmpleadoModule,
    MailModule,
    EstacionamientoModule,
    ProfileModule,
    VehiculoModule,
    PlanMensualModule,
    //PromocionesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
