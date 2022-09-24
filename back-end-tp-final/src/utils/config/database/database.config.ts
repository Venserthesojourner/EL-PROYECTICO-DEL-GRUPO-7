import { registerAs } from '@nestjs/config';

export default registerAs('databaseConfig', () => {
  return {
    connect: {
      type: 'mysql',
      host: 'localhost',
      port: parseInt('3306'),
      database: 'estacionamiento',
      username: 'root',
      password: '123456',
      entities: [__dirname + './src/**/entity/*.entity{.ts,.js}'],
      synchronize: true,
    },
  };
});
