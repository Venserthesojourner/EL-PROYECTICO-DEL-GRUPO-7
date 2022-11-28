import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService extends TypeOrmCrudService<Profile>{

    constructor(@InjectRepository(Profile) private readonly profileRepo: Repository<Profile>) {
        super(profileRepo);
    }

    async findOneProfileByUsername(username): Promise<Profile> {
        let profile = this.profileRepo.findOne({ where: { username } })
        return profile;
    }

}
