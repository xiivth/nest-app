import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { UtilsModule } from './shared/utils/utils.module';
import { GlobalHelpersModule } from './global-helpers/global-helpers.module';
import { DepartmentsModule } from './departments/departments.module';
import { PrismaModule } from './shared/prisma/prisma.module';
import { AuthsModule } from './auths/auths.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EmployeesModule,
    UtilsModule,
    GlobalHelpersModule,
    DepartmentsModule,
    PrismaModule,
    AuthsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
