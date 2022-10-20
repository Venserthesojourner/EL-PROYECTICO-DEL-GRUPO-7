import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateEmpleadoDto } from '../empleado/dto/create-empleado.dto';
import { Empleado } from '../empleado/entities/empleado.entity';

import { CreatePropietarioDto } from '../propietario/dto/create-propietario.dto';
import { Propietario } from '../propietario/entities/propietario.entity';

import { PropietarioService } from '../propietario/propietario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private readonly usuarioRepo: Repository<Usuario>,
    private readonly propietarioService: PropietarioService,
    private readonly empleadoService: PropietarioService,
  ) { }

  async createNewUser(payload: CreateUsuarioDto, extraData): Promise<Usuario> {
    const newUser = await this.usuarioRepo.save(payload)
    let response = {
      data: {
        user: CreateUsuarioDto || null,
        owner: CreateUsuarioDto || null,
        employee: CreateEmpleadoDto || null
      },
      message: 'msg',
      sucess: true
    };

    response.data.user = newUser
    if (newUser.role === 'owner') {
      // Se crearia una instancia de usuario propietario y si le asigna la id de user al mismo
      console.table(newUser)
      let newOwner: CreatePropietarioDto;
      newOwner.idUsuario == newUser.id
      newOwner = await this.propietarioService.createNewOwner(newOwner)
      response = {
        data: {
          user: newUser,
          owner: newOwner
        },
        message: 'msg',
        sucess: true
      }
    }
    if (newUser.role === 'employee') {
      // Se crea una instancia de operador (Necesito hacer una busqueda del Id del estacionamiento al que sera asociado)
      console.table(newUser)
      let newEmployee: CreateEmpleadoDto;
      newEmployee.idUsuario == newUser.id
      newEmployee.estacionamiento == extraData.estacionamiento
      response = await this.empleadoService.save(newEmployee)
    }

    /*
    {
      object: newUser,
      success: true || false,
      msg: errorMsg.ENUM
    }
    */
    return response;
  }

  async updateUserbyID(id: number, payload: CreateUsuarioDto) {
    await this.usuarioRepo.update(id, payload)
    const updatedUser = await this.usuarioRepo.find({
      where: { id },
      relations: []
    })
    return updatedUser
  }

  async updateUserbyUsername(username: string, payload: CreateUsuarioDto) {
    await this.usuarioRepo.update(username, payload)
    const updatedUser = await this.usuarioRepo.find({
      where: { username },
      relations: []
    })
    return updatedUser
  }

  async findAllUsers(

  ) {
    return await this.usuarioRepo.find()
  }

  async findAllUsersByRole(role: string): Promise<Usuario[]> {
    const userList = await this.usuarioRepo.find(
      { where: { role } }
    );
    return userList;
  }

  async findUserbyUsername(username: string): Promise<Usuario | undefined> {
    const usuario = this.usuarioRepo.findOne({
      where: { username: username },
      relations: []
    })
    return usuario;
  }

  async findUserbyId(id: number): Promise<Usuario | undefined> {
    const usuario = this.usuarioRepo.findOne({
      where: { id: id },
      relations: []
    })
    return usuario;
  }
  async deleteUserById(id: number) {
    const usuario = await this.usuarioRepo.findOne({
      where: { id: id },
      relations: []
    });
    usuario.deletedAt = new Date();
    const usuarioBorrado = await this.updateUserbyID(id, usuario)
    return usuarioBorrado
  }
}
