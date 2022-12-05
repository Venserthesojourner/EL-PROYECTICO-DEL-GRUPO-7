import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../database/database.module";
import { PlanMensualService } from "../plan-mensual/plan-mensual.service";
import { PlanMensualProviders } from "../plan-mensual/providers/plan-mensual.providers";
import { VehiculoProviders } from "./providers/vehiculo.providers";
import { VehiculoController } from "./vehiculo.controller";
import { VehiculoService } from "./vehiculo.service";

@Module({
    imports: [HttpModule, DatabaseModule],
    controllers: [VehiculoController],
    providers: [VehiculoService, PlanMensualService,
        ...VehiculoProviders, ...PlanMensualProviders],
    exports: [VehiculoService],
})
export class VehiculoModule { }