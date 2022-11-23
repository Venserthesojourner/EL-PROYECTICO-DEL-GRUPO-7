import { EntityRepository, Repository } from "typeorm";
import { Promocion } from "../entitites/promocion.entity";

@EntityRepository(Promocion)
export class EmpleadoRepository extends Repository<Promocion>{ }