import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStartPage(): string {
    return 'Hello World!';
  }
}
