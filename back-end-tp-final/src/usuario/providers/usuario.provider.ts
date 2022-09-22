import { DataSource } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';


export const CliDocumentoDigitalizadoAdjuntoProviders = [
    {
        provide: 'USUARIO_REPOSITORY',
        useFactory: (dataSource: DataSource) =>
            dataSource.getRepository(Usuario),
        inject: ['DATA_SOURCE'],
    },
];
