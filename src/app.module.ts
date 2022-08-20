import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmModuleOptions } from './configs/orm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmModuleOptions)],
  controllers: [],
  providers: [],
})
export class AppModule {}
