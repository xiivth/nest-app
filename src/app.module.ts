import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { UtilsModule } from './shared/utils/utils.module';
import { GlobalHelpersModule } from './global-helpers/global-helpers.module';

@Module({
  imports: [EmployeesModule, UtilsModule, GlobalHelpersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
