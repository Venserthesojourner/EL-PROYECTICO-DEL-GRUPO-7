import { DataSource } from 'typeorm';
import { Profile } from '../entities/profile.entity';


export const ProfileProviders = [
    {
        provide: 'PROFILE_REPOSITORY',
        useFactory: (dataSource: DataSource) =>
            dataSource.getRepository(Profile),
        inject: ['DATA_SOURCE'],
    },
];