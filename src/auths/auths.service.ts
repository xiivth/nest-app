import {
  HttpException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { hash, genSalt, compare } from 'bcrypt';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

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

  async login(logindto: LoginDto) {
    const user = await this.prismaService.user.findUnique({
      where: { email: logindto.email },
    });

    if (!user) {
      throw new NotFoundException('ไม่พบผู้ใช้ในระบบ');
    }

    const isValid = await compare(logindto.password, user.password);

    if (!isValid) {
      throw new UnauthorizedException('รหัสผ่านไม่ถูกต้อง');
    }

    const token = await this.jwtService.signAsync(
      {
        user_id: user.id,
        user_permission: user.permission,
      },
      { secret: process.env.JWT_KEY },
    );

    return { access_token: token };
  }
}
