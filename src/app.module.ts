import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { resolve } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: resolve(process.cwd(), '../motacheng.db'),
    entities: [User],
    synchronize: true,
  }), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
