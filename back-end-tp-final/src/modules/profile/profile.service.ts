import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { Profile } from './profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService extends TypeOrmCrudService<Profile>{

    constructor(@Inject('PROFILE_REPOSITORY') private readonly profileRepo: Repository<Profile>) {
        super(profileRepo);
    }

    async findOneProfileByUsername(username): Promise<Profile> {
        let profile = this.profileRepo.findOne({ where: { username } })
        return profile;
    }

}
