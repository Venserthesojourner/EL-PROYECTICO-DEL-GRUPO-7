import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Vehiculo } from "./entities/vehiculo.entity";

@Injectable()
export class VehiculoService {
    constructor(
        @Inject('VEHICULO_REPOSITORY')
        private readonly vehiculoRepo: Repository<Vehiculo>
    ){}
}