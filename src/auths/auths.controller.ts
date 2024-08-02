import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthsService } from './auths.service';
import { RegisterDto } from './dto/register.dto';

@Controller({ path: 'auths', version: '1' })
export class AuthsController {
  constructor(private readonly authsService: AuthsService) {}

  @Post('register')
  @HttpCode(201)
  async register(@Body() registerDto: RegisterDto) {
    await this.authsService.register(registerDto);
    return { meesge: `${registerDto.email} ลงทะเบียนสำเร็จ` };
  }
}
