import { Controller, Get, Header, Headers, Session } from '@nestjs/common';

@Controller()
export class AuthController {
  @Get('auth')
  @Header('user_info', 'test')
  getHello(@Headers() headers: Headers, @Session() session): string {
    console.log(headers);
    console.log(session.test);
    session.test = session.test ? session.test + 1 : 1;
    return 'Hello';
  }

}
