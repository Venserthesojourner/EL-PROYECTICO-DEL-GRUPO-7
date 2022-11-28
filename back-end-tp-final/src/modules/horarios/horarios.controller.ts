import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { HorariosService } from './horarios.service';
import { HorariosEntity } from './horarios.entity';
import { RouteMetadata } from 'nestjs-gis'

@RouteMetadata()
@Crud({
    model:{type:HorariosEntity},
    params:{
    }
})
@Controller('rest/horarios')
export class HorariosController {

  constructor(private service: HorariosService) { }

}
