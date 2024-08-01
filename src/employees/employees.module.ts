import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { UtilsModule } from 'src/shared/utils/utils.module';

@Module({
  imports: [UtilsModule],
  controllers: [EmployeesController],
})
export class EmployeesModule {}
