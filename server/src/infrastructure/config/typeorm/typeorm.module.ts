import { Module } from '@nestjs/common';
import { EnvironmentConfigService } from '../environment-config/environment-config.service';
import {
  TypeOrmModule,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { EnvironmentConfigModule } from '../environment-config/environment-config.module';

const getTypeOrmModuleOptions = (
  configs: EnvironmentConfigService,
): TypeOrmModuleOptions => {
  return {
    type: configs.getDatabaseType(),
    host: configs.getDatabaseHost(),
    port: configs.getDatabasePort(),
    username:
      configs.getDatabaseUsername(),
    password:
      configs.getDatabasePassword(),
  };
};

@Module({
  imports: [
    EnvironmentConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [
        EnvironmentConfigModule,
      ],
      inject: [
        EnvironmentConfigService,
      ],
      useFactory:
        getTypeOrmModuleOptions,
    }),
  ],
})
export class TypeormModule {}
