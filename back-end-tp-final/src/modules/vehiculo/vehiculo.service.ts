import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Vehiculo } from "./entities/vehiculo.entity";

@Injectable()
export class VehiculoService {
    constructor(
        @Inject('VEHICULO_REPOSITORY')
        private readonly vehiculoRepo: Repository<Vehiculo>
    ) { }

    async createVehiculo(payload) {
        return await this.vehiculoRepo.save(payload)
    }
    async updateVehiculo(payload, patente) {
        await this.vehiculoRepo.update({ patente }, payload)
    }
    async getAllPatentes(usuario) {
        return await this.vehiculoRepo.find({
            where: {
                titular: usuario
            },
            relations: {
                titular: true
            }
        })
    }
}