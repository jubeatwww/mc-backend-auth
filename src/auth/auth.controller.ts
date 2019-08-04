import { Controller, Get, Post, Header, Session, Body, HttpStatus, HttpCode, UseFilters } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserExceptionFilter } from '../user/errors/user.filter';

@Controller()
@UseFilters(UserExceptionFilter)
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Get('auth')
  @Header('user_info', 'test')
  getHello(@Session() session): string {
    session.test = session.test ? session.test + 1 : 1;
    return 'Hello';
  }

  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() user: CreateUserDto) {
    await this.userService.createUser(user);
  }

  @Post('login')
  public login(@Session() session) {
    console.log(session);
  }
}
