import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationModule } from './location/location.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Funnyboy..2001',
      database: 'myapp',
      autoLoadEntities: true,
      synchronize: true,
    }),
    LocationModule,
  ],
})
export class AppModule {}
