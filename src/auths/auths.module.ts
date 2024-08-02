import { Module } from '@nestjs/common';
import { AuthsController } from './auths.controller';
import { AuthsService } from './auths.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({ signOptions: { expiresIn: '7d' } }),
  ],
  controllers: [AuthsController],
  providers: [AuthsService, JwtStrategy],
})
export class AuthsModule {}
