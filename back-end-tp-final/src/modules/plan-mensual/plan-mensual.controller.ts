import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreatePlanMensualDto } from "./dto/create-plan-mensual.dto";
import { PlanMensualService } from "./plan-mensual.service";

@Controller('planes')
export class PlanMensualController {
    constructor(private readonly planMensualService: PlanMensualService) { }

    @Post()
    async create(
        @Body() nuevoPlan: CreatePlanMensualDto
    ) {
        return await this.planMensualService.createPlanMensual(nuevoPlan)
    }

    @Get('/estacionamiento/:id')
    async getPerPark(
        @Param('id') id: number
    ) {
        return await this.planMensualService.getAllPlanes(id)
    }

    @Get('/usuario/subscripciones/:patente')
    async getMySubs(
        @Param('patente') patente: string
    ) {
        return await this.planMensualService.getSubcriptions(patente)
    }

    @Get('subscripcion/:codigo')
    async getSubByCode(
        @Param('codigo') codigo: string
    ) {
        return await this.planMensualService.getAPlan(codigo)
    }
}