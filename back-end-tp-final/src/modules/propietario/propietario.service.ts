import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Propietario } from "./entities/propietario.entity";

@Injectable()
export class PropietarioService {
    constructor(
        @Inject('PROPIETARIO_REPOSITORY')
        private readonly propietarioRepo: Repository<Propietario>
    ) { }
}
