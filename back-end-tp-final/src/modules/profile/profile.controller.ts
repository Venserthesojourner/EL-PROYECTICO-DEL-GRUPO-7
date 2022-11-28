import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ProfileService } from './profile.service';
import { Profile } from './profile.entity';
//import { RouteMetadata } from 'nestjs-gis'

//@RouteMetadata()
@Crud({
  model: { type: Profile },
  params: {
  }
})
@Controller('usuario/profile')
export class ProfileController {

  constructor(private service: ProfileService) { }

}
