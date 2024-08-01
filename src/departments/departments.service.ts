import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class DepartmentsService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createDepartmentDto: CreateDepartmentDto) {
    return 'This action adds a new department';
  }

  async findAll() {
    return await this.prismaService.department.findMany();
  }

  findOne(id: number) {
    if (id === 2) {
      throw new NotFoundException('ไม่พบรหัส 2');
    }
    if (id === 3) {
      throw new HttpException('ไม่พบรหัส 3', HttpStatus.NOT_FOUND);
    }
    return `This action returns a #${id} department`;
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return `This action updates a #${id} department`;
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }
}
