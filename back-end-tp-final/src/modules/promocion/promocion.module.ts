import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../database/database.module";

import { PromocionesController } from "./promocion.controller";

@Module({
    imports: [HttpModule, DatabaseModule],
    controllers: [PromocionesController],
})
export class PromocionesModule { }