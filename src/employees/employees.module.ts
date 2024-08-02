import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { UtilsModule } from 'src/shared/utils/utils.module';
import { EmployeesService } from './employees.service';

@Module({
  imports: [UtilsModule],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
