import { DataSource } from 'typeorm';
import { Promocion } from '../entitites/promocion.entity';


export const PromocionProviders = [
  {
    provide: 'PROMOCION_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Promocion),
    inject: ['DATA_SOURCE'],
  },
];
