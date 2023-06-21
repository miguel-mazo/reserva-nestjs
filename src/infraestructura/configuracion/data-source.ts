import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
   // port: 3306,
    username: 'root',
    password: '',
    database: 'microservicio',
    entities: ['dist/**/*.entidad{.ts,.js}'],
    synchronize: false,
    migrations: ['dist/infraestructura/migraciones/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;