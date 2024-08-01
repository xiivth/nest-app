import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsService {
  getServerDate(): string {
    return 'Date: ' + new Date().toLocaleDateString();
  }
}
