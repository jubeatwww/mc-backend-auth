import { Injectable } from '@nestjs/common';
import { createHmac } from 'crypto';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
    ) {}

    async validateUser(username: string, password: string): Promise<User | null> {
        const user: User = await this.userService.findOne(username);
        const passwordHash = createHmac('sha256', password).digest('hex');

        if (user && user.passwordHash === passwordHash) {
            delete user.passwordHash;
            return user;
        }
        return null;
    }
}
