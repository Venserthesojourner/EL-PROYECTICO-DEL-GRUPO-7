
import { Inject, Injectable } from '@nestjs/common';
export * from '../../commons/enums/'
import { hash } from 'bcrypt';
import { Repository } from 'typeorm';
import { successMsg } from '../../commons/enums/';
import { CreateEmpleadoDto } from '../empleado/dto/create-empleado.dto';
import { EmpleadoService } from '../empleado/empleado.service';
import { ProfileService } from '../profile/profile.service';
import { CreatePropietarioDto } from '../propietario/dto/create-propietario.dto';
import { PropietarioService } from '../propietario/propietario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private readonly usuarioRepo: Repository<Usuario>,
    private readonly propietarioService: PropietarioService,
    private readonly empleadoService: EmpleadoService,
    private readonly profileService: ProfileService
  ) { }

  async createNewUser(payload: CreateUsuarioDto, extraData?: { estacionamiento }): Promise<Usuario> {
    const password = await hash(payload.username + payload.role, 10);
    payload.password = password;
    const newUser = await this.usuarioRepo.save(payload);

    let response = {
      data: {
        user: newUser,
        owner: null,
        employee: null
      },
      message: 'msg',
      sucess: true
    };

    response.data.user = newUser
    if (newUser.role === 'owner') {
      // Se crearia una instancia de usuario propietario y si le asigna la id de user al mismo
      console.table(newUser)
      let newOwner: CreatePropietarioDto = { idUsuario: newUser }
      console.table(newOwner)
      newOwner = await this.propietarioService.createNewOwner(newOwner)
      response = {
        data: {
          user: newUser,
          owner: newOwner,
          employee: null
        },
        message: successMsg.SCS001,
        sucess: true
      }
    }
    if (newUser.role === 'employee') {
      // Se crea una instancia de operador (Necesito hacer una busqueda del Id del estacionamiento al que sera asociado)
      console.table(newUser)
      let newEmployee: CreateEmpleadoDto;
      newEmployee.usuario == newUser.id
      newEmployee.estacionamiento == extraData.estacionamiento
      let createdEmployee = await this.empleadoService.createNewEmployee(newEmployee)
      response = {
        data: {
          user: newUser,
          owner: createdEmployee,
          employee: null
        },
        message: successMsg.SCS001,
        sucess: true
      }
    }

    /*
    {
      object: newUser,
      success: true || false,
      msg: errorMsg.ENUM
    }
    */
    return newUser;
  }

  async updateUserbyID(id: number, payload: UpdateUsuarioDto) {
    await this.usuarioRepo.update(id, payload);
    const updatedUser = await this.usuarioRepo.find({
      where: { id }
    });
    return updatedUser;
  }

  async updateUserbyUsername(username: string, payload: UpdateUsuarioDto) {
    let profile = await this.profileService.findOneProfileByUsername({ where: { username } })
    await this.usuarioRepo.update(profile.usuario.id, payload);
    const updatedUser = await this.usuarioRepo.find({
      where: { id: profile.usuario.id }
    });
    return updatedUser;
  }

  async findAllUsers() {
    return await this.usuarioRepo.find();
  }

  async findAllUsersByRole(role: string): Promise<Usuario[]> {
    const userList = await this.usuarioRepo.find({ where: { role } });
    return userList;
  }

  async findUserbyUsername(username: string): Promise<Usuario | undefined> {
    let profile = await this.profileService.findOneProfileByUsername({ where: { username } })
    const usuario = this.usuarioRepo.findOne({
      where: { id: profile.usuario.id },
      relations: [],
    });
    return usuario;
  }

  async findUserbyId(id: number): Promise<Usuario | undefined> {
    const usuario = this.usuarioRepo.findOne({
      where: { id: id },
      relations: [],
    });
    return usuario;
  }
  async deleteUserById(id: number) {
    const usuario = await this.usuarioRepo.findOne({
      where: { id: id },
      relations: [],
    });
    usuario.deletedAt = new Date();
    const usuarioBorrado = await this.updateUserbyID(id, usuario);
    return usuarioBorrado;
  }
}
