import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './utils/auth/auth.module';
import databaseConfig from './utils/config/database/database.config';
import endpointConfig from './utils/config/endpoint.config';
import { enviroments } from './utils/config/enviroments.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.DEVELOPMENT],
      load: [endpointConfig, databaseConfig],
      isGlobal: true,
      //validationSchema: 'PLACEHOLDER',
    }),
    TypeOrmModule.forRoot(

    ),
    UsuarioModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
