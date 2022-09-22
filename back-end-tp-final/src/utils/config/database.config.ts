import { registerAs } from '@nestjs/config';

export default registerAs('databaseConfig', () => {
  return {
    connect: {
      database_host: process.env.DATABASE_HOST,
      database_port: process.env.DATABASE_PORT,
      database_database: process.env.DATABASE_NAME,
      database_username: process.env.DATABASE_USERNAME,
      database_password: process.env.DATABASE_PASSWORD,
    },
  };
});
