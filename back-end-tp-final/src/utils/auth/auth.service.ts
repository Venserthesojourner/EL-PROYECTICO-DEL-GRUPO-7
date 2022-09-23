import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { UsuarioService } from './../../usuario/usuario.service';


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsuarioService,
    private jwtService: JwtService,
  ) { }

  async validateUser(username: string, password: string) {
    const userToValidate = await this.usersService.findUserbyUsername(username);
    if (userToValidate === undefined) {
      // Throw new Error: User not Found
    }

    if (userToValidate && userToValidate.password === password) {
      // User is validated, return userData for purpouses
      const { password, ...userData } = userToValidate;
      return userData;
    }

    if (userToValidate.password !== password) {
      // Throws new Error: Invalid Password
    }

  }

  async login(user: Usuario) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
