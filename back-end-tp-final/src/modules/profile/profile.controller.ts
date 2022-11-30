import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { UpdateProfileDto } from './dto/update-profile-dto';
import { CreateProfileDto } from './dto/create-profile-dto';
//import { RouteMetadata } from 'nestjs-gis'

//@RouteMetadata()

@Controller('usuario/profile')
export class ProfileController {

  constructor(private service: ProfileService) { }

  @Post()
  async createProfile(@Body() profile: CreateProfileDto) {
    return this.service.createProfile(profile)
  }

  @Get()
  async getProfile(@Param('username') username: string) {
    return await this.service.findOneProfileByUsername(username)
  }
  @Put()
  async updateProfile(@Body() profile: UpdateProfileDto, @Param('username') username) {
    return await this.service.updateProfile(username, profile)
  }
}
