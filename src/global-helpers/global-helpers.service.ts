import { Injectable } from '@nestjs/common';
import { format } from 'date-fns';
import { th } from 'date-fns/locale';

@Injectable()
export class GlobalHelpersService {
  getThaiDate() {
    return format(new Date(), 'dd MMMM yyyyy HH:mm:ss', { locale: th });
  }
}
