import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../database/database.module";
import { VehiculoProviders } from "../vehiculo/providers/vehiculo.providers";
import { VehiculoService } from "../vehiculo/vehiculo.service";
import { PlanMensualController } from "./plan-mensual.controller";
import { PlanMensualService } from "./plan-mensual.service";
import { PlanMensualProviders } from "./providers/plan-mensual.providers";

@Module({
    imports: [HttpModule, DatabaseModule],
    controllers: [PlanMensualController],
    providers: [PlanMensualService, VehiculoService, ...VehiculoProviders, ...PlanMensualProviders],
    exports: [PlanMensualService]
})
export class PlanMensualModule { }