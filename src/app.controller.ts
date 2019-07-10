import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/auth')
  @Header('user_info', 'test')
  getHello(): string {
    return this.appService.getHello();
  }
}
