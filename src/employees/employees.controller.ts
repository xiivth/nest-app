import { Controller, Get } from '@nestjs/common';
import { UtilsService } from 'src/shared/utils/utils.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly utilsService: UtilsService) {}

  @Get()
  findAll() {
    return {
      message: 'all employees',
      date: this.utilsService.getServerDate(),
    };
  }
}
