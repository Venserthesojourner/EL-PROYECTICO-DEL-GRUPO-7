import { DataSource } from 'typeorm';
import { ConfigType } from '@nestjs/config';
import config from './../config/database.config'
import { Usuario } from './../modules/usuario/entities/usuario.entity';
import { Propietario } from './../modules/propietario/entities/propietario.entity';
import { Empleado } from './../modules/empleado/entities/empleado.entity';
import { Estacionamiento } from './../modules/estacionamiento/entitites/estacionamiento.entity';
import { Profile } from '../modules/profile/entities/profile.entity';
import { Promocion } from '../modules/promocion/entitites/promocion.entity';
import { PlanMensual } from '../modules/plan-mensual/entities/plan-mensual.entity';
import { Vehiculo } from '../modules/vehiculo/entities/vehiculo.entity';

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async (configService: ConfigType<typeof config>) => {
            const { username, host, database, password, port } = config().connect;
            const dataSource = new DataSource({
                type: 'mysql',
                host,
                port,
                username,
                password,
                database,
                entities: [Usuario, Propietario, Empleado, Estacionamiento, Profile, Promocion, PlanMensual, Vehiculo],
                synchronize: false,
                logging: false,
            });
            return dataSource.initialize();
        },
    },
];