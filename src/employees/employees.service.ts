import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    // const emp = await this.prismaService.employee.findMany({
    //   include: { Department: true },
    // });
    const emp = await this.prismaService.employee.findMany({
      select: {
        emp_no: true,
        first_name: true,
        last_name: true,
        hire_date: true,
        Department: {
          select: {
            department_name: true,
          },
        },
      },
    });
    const countEmp = await this.prismaService.employee.count();
    return { total: countEmp, length: emp.length, data: emp };
  }

  async findAllWithPagination(page = 1, pageSize = 10) {
    const emp = await this.prismaService.employee.findMany({
      select: {
        emp_no: true,
        first_name: true,
        last_name: true,
        hire_date: true,
        Department: {
          select: {
            department_name: true,
          },
        },
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
    const countEmp = await this.prismaService.employee.count();
    return { total: countEmp, length: emp.length, data: emp };
  }
}
