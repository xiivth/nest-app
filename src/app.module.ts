import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { UtilsModule } from './shared/utils/utils.module';
import { GlobalHelpersModule } from './global-helpers/global-helpers.module';
import { DepartmentsModule } from './departments/departments.module';
import { PrismaModule } from './shared/prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EmployeesModule,
    UtilsModule,
    GlobalHelpersModule,
    DepartmentsModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
