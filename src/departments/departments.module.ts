import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsController } from './departments.controller';
// import { PrismaModule } from 'src/shared/prisma/prisma.module';

@Module({
  // imports: [PrismaModule],
  controllers: [DepartmentsController],
  providers: [DepartmentsService],
})
export class DepartmentsModule {}
