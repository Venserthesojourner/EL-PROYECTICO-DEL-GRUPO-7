import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreatePlanMensualDto } from "./dto/create-plan-mensual.dto";
import { PlanMensual } from "./entities/plan-mensual.entity";

@Injectable()
export class PlanMensualService {
    constructor(
        @Inject('PLAN_MENSUAL_REPOSITORY')
        private readonly planMensualRepo: Repository<PlanMensual>
    ) {
    }

    async createPlanMensual(planMensualDto: CreatePlanMensualDto) {
        let planMensual = await this.planMensualRepo.save(planMensualDto)
        return planMensual
    }

    async getAllPlanes(idEstacionamiento: number) {
        let listaPlanes = await this.planMensualRepo.find({
            where: {
                estacionamiento: { id: idEstacionamiento },
                estado: 'vigente'
            }, relations: {
                estacionamiento: true
            }
        })
        return listaPlanes
    }

    async getSubcriptions(patente: string) {
        let subscripciones = await this.planMensualRepo.find({
            where: {
                vehiculo: { patente }
            }, relations: {
                estacionamiento: true,
                vehiculo: {
                    titular: true
                }
            }
        })
        return subscripciones
    }

    async getAPlan(codigo: string) {
        let plan = await this.planMensualRepo.findOne({ where: { codigo }, relations: { estacionamiento: true } })
        return plan
    }



}