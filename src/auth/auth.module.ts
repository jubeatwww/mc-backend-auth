import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';

@Module({
  imports: [UserModule, PassportModule.register({ session: true })],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, SessionSerializer, LoginGuard, AuthGuard],
})
export class AuthModule {}
