import { Body, Controller, Post } from "@nestjs/common";
import { CreateVehiculoDto } from "./dto/create-vehiculo.dto";
import { VehiculoService } from "./vehiculo.service";

@Controller('vehiculo')
export class VehiculoController {
    constructor(
        private readonly vehiculoService: VehiculoService
    ) { }

    @Post()
    async create(
        @Body() payload: CreateVehiculoDto
    ) {
        return await this.vehiculoService.createVehiculo(payload)
    }
}