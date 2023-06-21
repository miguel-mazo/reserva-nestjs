import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
//import { ClienteModule } from './cliente/cliente.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppLogger } from './configuracion/ceiba-logger.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NodeEnv } from './configuracion/environment/env-node.enum';
import { databaseConfigFactory } from './configuracion/database.config';
import { dataSourceOptions } from './configuracion/data-source';
import { ClienteModule } from './cliente/cliente.module';

@Module({
  providers: [AppLogger],
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),    
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `env/${process.env.NODE_ENV}.env`,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid(NodeEnv.DEVELOPMENT, NodeEnv.PRODUCTION)
          .required(),
      }),
    }),
    UsuarioModule,
    ClienteModule
        //ClienteModule,
  ],
})
export class InfraestructuraModule {
}
