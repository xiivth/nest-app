import { Controller, Get, HttpCode, Post } from '@nestjs/common';
import { GlobalHelpersService } from 'src/global-helpers/global-helpers.service';
import { UtilsService } from 'src/shared/utils/utils.service';

@Controller('employees')
export class EmployeesController {
  constructor(
    private readonly utilsService: UtilsService,
    private readonly globalHelpersService: GlobalHelpersService,
  ) {}

  @Get()
  findAll() {
    return {
      message: 'all employees',
      date: this.utilsService.getServerDate(),
      thaiDate: this.globalHelpersService.getThaiDate(),
    };
  }

  @Post()
  @HttpCode(201)
  create() {
    return 'create employee';
  }
}
