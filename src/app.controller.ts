import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHomeAPI() {
    return {
      message: 'Nest API Running...',
      app_name: process.env.APP_NAME,
      app_version: process.env.API_VERSION,
    };
  }

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
