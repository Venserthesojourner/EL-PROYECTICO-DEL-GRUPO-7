import { EntityRepository, Repository } from "typeorm";
import { Vehiculo } from "../entities/vehiculo.entity";


@EntityRepository(Vehiculo)
export class VehiculoRepository extends Repository<Vehiculo> { }