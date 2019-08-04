import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUserService } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserException } from './errors/user.exception';
import { ErrorType } from './enums/error.enum';

@Injectable()
export class UserService implements IUserService {
    constructor(
        @InjectRepository(User)
        private readonly userReposity: Repository<User>,
    ) {}

    public async createUser(user: CreateUserDto): Promise<User> {
        let u: User = await this.userReposity.findOne({ username: user.username });

        if (u) {
            throw new UserException(ErrorType.USER_EXISTS);
        } else {
            u = new User();
            Object.assign(u, user);
            return await this.userReposity.save(u);
        }
    }
}
