import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from 'src/domain/config/database.interface';

@Injectable()
export class EnvironmentConfigService
  implements DatabaseConfig
{
  constructor(
    private readonly configService: ConfigService,
  ) {}

  getDatabaseType() {
    return this.configService.get<
      'postgres' | 'mongodb'
    >('DATABASE_TYPE');
  }

  getDatabaseHost() {
    return this.configService.get<string>(
      'DATABASE_HOST',
    );
  }

  getDatabasePort() {
    return this.configService.get<number>(
      'DATABASE_PORT',
    );
  }

  getDatabaseUsername() {
    return this.configService.get<string>(
      'DATABASE_USERNAME',
    );
  }

  getDatabasePassword() {
    return this.configService.get<string>(
      'DATABASE_PASSWORD',
    );
  }

  getDatabaseName() {
    return this.configService.get<string>(
      'DATABASE_NAME',
    );
  }
}
