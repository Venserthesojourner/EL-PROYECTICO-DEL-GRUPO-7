import { DataSource } from 'typeorm';
import { PlanMensual } from '../entities/plan-mensual.entity';

export const PlanMensualProviders = [
    {
        provide: 'PLAN_MENSUAL_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(PlanMensual),
        inject: ['DATA_SOURCE'],
    },
];