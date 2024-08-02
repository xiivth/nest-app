import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  Version,
} from '@nestjs/common';
import { GlobalHelpersService } from 'src/global-helpers/global-helpers.service';
import { UtilsService } from 'src/shared/utils/utils.service';
import { EmployeesService } from './employees.service';

@Controller({ path: 'employees', version: '1' })
export class EmployeesController {
  constructor(
    // private readonly utilsService: UtilsService,
    // private readonly globalHelpersService: GlobalHelpersService,
    private readonly employeesService: EmployeesService,
  ) {}

  @Get()
  findAll() {
    return this.employeesService.findAll();
    // return {
    //   message: 'all employees',
    //   date: this.utilsService.getServerDate(),
    //   thaiDate: this.globalHelpersService.getThaiDate(),
    // };
  }

  @Post()
  @HttpCode(201)
  create(@Body() createEmployeeDto: any) {
    return 'create employee ' + createEmployeeDto.name;
  }

  @Get('search')
  searchEmployee(@Query() query: any): string {
    return `This query action returns #${query.name} age ${query.age}`;
  }

  @Version('2')
  @Get('search')
  searchEmployeeV2(@Query() query: any): string {
    return `This query v2 action returns #${query.name} salary ${query.salary}`;
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    return `This param action returns an employee #${params.id}`;
  }
}
