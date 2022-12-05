import { DataSource } from 'typeorm';
import { Vehiculo } from '../entities/vehiculo.entity';



export const VehiculoProviders = [
    {
        provide: 'VEHICULO_REPOSITORY',
        useFactory: (dataSource: DataSource) =>
            dataSource.getRepository(Vehiculo),
        inject: ['DATA_SOURCE'],
    },
];