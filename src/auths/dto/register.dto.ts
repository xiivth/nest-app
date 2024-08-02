import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty({ message: 'อีเมล์ ต้องมีค่า' })
  @IsEmail({}, { message: 'รูปแบบอีเมล์ไม่ถูกต้อง' })
  email: string;

  @IsNotEmpty()
  @MinLength(3)
  password: string;
}
