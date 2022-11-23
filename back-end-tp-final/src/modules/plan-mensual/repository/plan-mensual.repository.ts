import { EntityRepository, Repository } from "typeorm";
import { PlanMensual } from "../entities/plan-mensual.entity";


@EntityRepository(PlanMensual)
export class EmpleadoRepository extends Repository<PlanMensual>{ }