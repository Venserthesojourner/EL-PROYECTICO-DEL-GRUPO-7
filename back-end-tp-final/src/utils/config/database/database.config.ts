import { registerAs } from '@nestjs/config';

export default registerAs('databaseConfig', () => {
  return {
    connect: {
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      database: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      entities: [__dirname + './src/**/entity/*.entity{.ts,.js}'],
      synchronize: true,
    },
  };
});
