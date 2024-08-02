import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthsService } from './auths.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller({ path: 'auths', version: '1' })
export class AuthsController {
  constructor(private readonly authsService: AuthsService) {}

  @Post('register')
  @HttpCode(201)
  async register(@Body() registerDto: RegisterDto) {
    await this.authsService.register(registerDto);
    return { message: `${registerDto.email} ลงทะเบียนสำเร็จ` };
  }

  @Post('login')
  @HttpCode(200)
  login(@Body() loginDto: LoginDto) {
    return this.authsService.login(loginDto);
  }
}
