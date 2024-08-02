import {
  BadRequestException,
  ConflictException,
  HttpException,
  // HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class DepartmentsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createDepartmentDto: CreateDepartmentDto) {
    try {
      const department = await this.prismaService.department.create({
        data: createDepartmentDto,
      });
      return department;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2000') {
          throw new BadRequestException(
            'รหัสแผนก ต้องไม่เกิน 2 ตัวอักษร โปรดลองใหม่',
          );
        }
        if (e.code === 'P2002') {
          throw new ConflictException('ข้อมูลซ้ำ โปรดลองใหม่');
        }
      }
      throw new HttpException(e, 500);
    }
  }

  async findAll() {
    return await this.prismaService.department.findMany({
      orderBy: { department_id: 'desc' },
    });
  }

  async findOne(id: string) {
    const department = await this.prismaService.department.findUnique({
      where: { department_id: id },
    });
    if (!department) {
      throw new NotFoundException('ไม่พบข้อมูลในระบบ');
    }
    return department;
  }

  async update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    await this.findOne(id);
    const department = await this.prismaService.department.update({
      data: updateDepartmentDto,
      where: { department_id: id },
    });
    return department;
  }

  async remove(id: string) {
    await this.findOne(id);
    const department = await this.prismaService.department.delete({
      where: { department_id: id },
    });
    return department;
  }

  async findAllBySQL() {
    return await this.prismaService
      .$queryRaw`select * from Department order by department_id`;
  }
}
