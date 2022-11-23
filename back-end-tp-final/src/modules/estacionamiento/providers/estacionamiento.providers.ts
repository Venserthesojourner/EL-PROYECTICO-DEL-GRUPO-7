import { DataSource } from 'typeorm';
import { Estacionamiento } from '../entitites/estacionamiento.entity';


export const EstacionamientoProviders = [
    {
        provide: 'ESTACIONAMIENTO_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Estacionamiento),
        inject: ['DATA_SOURCE'],
    },
];
