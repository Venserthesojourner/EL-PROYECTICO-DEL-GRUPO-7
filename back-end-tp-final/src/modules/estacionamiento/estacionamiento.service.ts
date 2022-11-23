import { Inject, Injectable } from '@nestjs/common';
import { Estacionamiento } from "./entitites/estacionamiento.entity";
import { Repository } from "typeorm";
import { CreateEstacionamientoDto } from './dto/create-estacionamiento.dto';
import { UpdateEstacionamientoDto } from './dto/update-estacionamiento.dto';
import { response } from '../../commons/types';


@Injectable()
export class EstacionamientoService {
  constructor(
    @Inject('ESTACIONAMIENTO_REPOSITORY')
    private readonly estacionamientoRepo: Repository<Estacionamiento>
  ) {

  }
  async newParkingLot(payload: CreateEstacionamientoDto): Promise<Estacionamiento> {
    let newEstacionamiento = await this.estacionamientoRepo.save(payload)
    return newEstacionamiento
  }

  async getParkingLots(): Promise<response> {
    let listaEstacionamientos = await this.estacionamientoRepo.find()
    let response: response = {
      data: {
        parkingLots: listaEstacionamientos,
      },
      success: true,
      message: "exito"
    }
    return response
  }

  async getAParkinglot(id: number): Promise<response> {
    let parkingLot = await this.estacionamientoRepo.find({
      where: { id }
    })
    let response: response = {
      data: { parkingLot: parkingLot },
      success: true,
      message: "Exito"
    }
    return response
  }

  async updateParkingLot(id: number, payload: UpdateEstacionamientoDto): Promise<response> {
    await this.estacionamientoRepo.update(
      {
        id: id
      }
      , payload
    )
    let updatedParkingLot = await this.estacionamientoRepo.find({ where: { id } })
    let response: response = {
      data: { updatedParkingLot: updatedParkingLot },
      success: true,
      message: "message"
    }
    return response
  }
}
