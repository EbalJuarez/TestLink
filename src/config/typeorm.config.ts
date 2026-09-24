import { registerAs } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export default registerAs(
    'database',
    (): TypeOrmModuleOptions => ({
        type: 'postgres',
        host: process.env.DB_HOST ?? 'localhost',
        port: parseInt(process.env.DB_PORT ?? '5432', 10),
        username: process.env.DB_USERNAME ?? 'postgres',
        password: process.env.DB_PASSWORD ?? '12345',
        database: process.env.DB_DATABASE ?? 'bases2d',
        schema: process.env.DB_SCHEMA ?? 'odontologia',
        autoLoadEntities: true,
        synchronize: false,
        ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
    }),
);