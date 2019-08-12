import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';

export interface IUserService {
    createUser(user: CreateUserDto): Promise<User>;
}
