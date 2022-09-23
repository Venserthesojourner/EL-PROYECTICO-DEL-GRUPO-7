import { Body, Controller, Post } from '@nestjs/common';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  async login(@Body() user: Usuario) {
    const access_token = await this.authService.login(user);
    return access_token;
  }

}
