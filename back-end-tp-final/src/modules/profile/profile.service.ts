import { Inject, Injectable } from '@nestjs/common';
import { Profile } from './entities/profile.entity';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile-dto';
import { UpdateProfileDto } from './dto/update-profile-dto';

@Injectable()
export class ProfileService {

    constructor(@Inject('PROFILE_REPOSITORY') private readonly profileRepo: Repository<Profile>) {

    }

    async createProfile(payload: CreateProfileDto) {
        let newProfile = await this.profileRepo.save(payload)
        return newProfile
    }

    async findOneProfileByUsername(username): Promise<Profile> {
        let profile = this.profileRepo.findOne({ where: { username } })
        return profile;
    }

    async updateProfile(username: string, payload: UpdateProfileDto) {
        await this.profileRepo.update(username, payload)
        let updatedProfile = this.profileRepo.findOne({ where: { username } })
        return updatedProfile
    }

}
