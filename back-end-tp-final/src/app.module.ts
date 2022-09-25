import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioProviders } from './usuario/providers/usuario.providers';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioService } from './usuario/usuario.service';
import { AuthModule } from './utils/auth/auth.module';
import { AuthService } from './utils/auth/auth.service';
import { JwtStrategy } from './utils/auth/jwt.strategy';
import { LocalStrategy } from './utils/auth/local.strategy';
import databaseConfig from './utils/config/database/database.config';
import endpointConfig from './utils/config/endpoint.config';
import { enviroments } from './utils/config/enviroments.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.DEVELOPMENT] || '.env',
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
  providers: [AppService, AuthService, ...UsuarioProviders, UsuarioService, LocalStrategy, JwtService, JwtStrategy],
})
export class AppModule { }
