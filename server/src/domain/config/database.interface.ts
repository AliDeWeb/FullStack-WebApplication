export interface DatabaseConfig {
  getDatabaseType():
    | 'postgres'
    | 'mongodb';
  getDatabaseHost(): string;
  getDatabasePort(): number;
  getDatabaseUsername(): string;
  getDatabasePassword(): string;
  getDatabaseName(): string;
}
