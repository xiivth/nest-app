import { Module } from '@nestjs/common';
import { AuthsController } from './auths.controller';
import { AuthsService } from './auths.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({ signOptions: { expiresIn: '7d' } })],
  controllers: [AuthsController],
  providers: [AuthsService],
})
export class AuthsModule {}
