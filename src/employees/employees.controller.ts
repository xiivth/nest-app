import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
} from '@nestjs/common';
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
  create(@Body() createEmployeeDto: any) {
    return 'create employee ' + createEmployeeDto.name;
  }

  @Get('search')
  searchEmployee(@Query() query: any): string {
    return `This search action returns #${query.name} ${query.age}`;
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    return `This action returns a #${params.id} employee`;
  }
}
