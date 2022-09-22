import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private readonly userRepository: Repository<Usuario>
  ) { }

  async createNewUser(payload: CreateUsuarioDto): Promise<Usuario> {
    const newUser = await this.userRepository.save(payload)
    if (newUser.role === 'owner') {
      // Se crearia una instancia de usuario propietario y si le asigna la id de user al mismo
    }
    if (newUser.role === 'employee') {
      // Se crea una instancia de operador (Necesito hacer una busqueda del Id del estacionamiento al que sera asociado)
    }
    return newUser;
  }

  async updateUserbyID(id: number, payload) { }

  async updateUserbyUsername() { }

  async findAllUsers() { }

  async findAllUsersByRole(role: string): Promise<Usuario[]> {
    const userList = await this.userRepository.find(
      { where: { role } }
    );
    return userList;
  }

  async findUserbyUsername(username: string): Promise<Usuario | undefined> {
    const usuario = this.userRepository.findOne({
      where: { username: username },
      relations: []
    })
    return usuario;
  }

  async findUserbyId(id: number): Promise<Usuario | undefined> {
    const usuario = this.userRepository.findOne({
      where: { id: id },
      relations: []
    })
    return usuario;
  }
  async deleteUserById(id: number) {

  }
}
