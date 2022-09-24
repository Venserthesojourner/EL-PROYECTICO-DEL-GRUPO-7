import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsuarioModule } from '../../usuario/usuario.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UsuarioService } from '../../usuario/usuario.service';
import { UsuarioProviders } from '../../usuario/providers/usuario.providers';

@Module({
  imports: [UsuarioModule, PassportModule, JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),],
  providers: [...UsuarioProviders, UsuarioService, AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule { }

