import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateEstacionamientoDto } from './dto/create-estacionamiento.dto';
import { EstacionamientoService } from './estacionamiento.service';

@Controller('estacionamiento')
export class EstacionamientoController {
  constructor(private readonly estacionamientoService: EstacionamientoService) { }

  @Get()
  async getParkingLots() {
    return await this.estacionamientoService.getParkingLots()
  }
  @Get(':id')
  async getAParkingLot(@Param('id') id: number) {
    return await this.estacionamientoService.getAParkinglot(id)
  }

  @Post()
  async newParkingLot(@Body() payload: CreateEstacionamientoDto) {
    return await this.estacionamientoService.newParkingLot(payload)
  }
}
