import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  Header,
  Session,
  Body,
  HttpStatus,
  HttpCode,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserExceptionFilter } from '../user/errors/user.filter';
import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';

@Controller()
@UseFilters(UserExceptionFilter)
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
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

  @UseGuards(LoginGuard)
  @Post('login')
  public login(@Req() req) {
    return req.user;
  }

  @Get('logout')
  public logout(@Req() req, @Res() res: Response) {
    req.logout();
    res.redirect('/');
  }
}
