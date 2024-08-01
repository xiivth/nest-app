import { Module } from '@nestjs/common';
import { GlobalHelpersService } from './global-helpers.service';

@Module({
  providers: [GlobalHelpersService],
})
export class GlobalHelpersModule {}
