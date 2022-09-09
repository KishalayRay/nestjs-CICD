import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {

    return 'Hello World! there everyone this is a test of the emergency broadcast system';


  }
}
