import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { path } from 'app-root-path';
import { DataSource } from 'typeorm';

const type = 'postgres';
const commonProperties = {
  migrationsTableName: 'migrations',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '', // password of postgres
  database: 'db_migrations',
  synchronize: false,
  entities: [path + '/src/**/*.entity{.ts,.js}'],
  migrations: [path + '/src/migrations/**/*{.ts,.js}'],
  subscribers: [path + '/src/subscriber/**/*{.ts,.js}'],
};

/**
 * for app module
 */
export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type,
  ...commonProperties,
};

/**
 * @info
 * for migrations
 */
const AppDataSource = new DataSource({
  type,
  ...commonProperties,
});

export default AppDataSource;

AppDataSource.initialize()
  .then(() => console.log('AppDataSource initialize'))
  .catch((error) => console.error('Error initializing Data Source', error));
