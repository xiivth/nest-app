import { HttpException, Injectable } from '@nestjs/common';
import { hash, genSalt } from 'bcrypt';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthsService {
  constructor(private readonly prismaService: PrismaService) {}

  async register(registerDto: RegisterDto) {
    try {
      const salt = await genSalt(10);
      const hashedPassword = await hash(registerDto.password, salt);
      const newUser = await this.prismaService.user.create({
        data: { email: registerDto.email, password: hashedPassword },
      });
      return newUser;
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }

  login() {}
}
