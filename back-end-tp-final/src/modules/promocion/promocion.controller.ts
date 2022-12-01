import { Body, Controller, Get, Post } from "@nestjs/common";
import { PromocionesService } from "./promocion.service";

@Controller('promociones')
export class PromocionesController {
    constructor(private readonly promocionesService: PromocionesService) { }

    @Post()
    create(@Body() createPromo) {
        return this.promocionesService.createNewPromo(createPromo);
    }

    @Get()
    findAll() {
        return this.promocionesService.findAllPromos();
    }
}