import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    const emp = await this.prismaService.employee.findMany({
      include: { Department: true },
    });
    return emp;
  }
}
