import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as crypto from 'crypto';
import { UserRole } from '../enums/role.enum';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ length: 30 })
    public firstName: string;

    @Column({ length: 50 })
    public lastName: string;

    @Column({ length: 50 })
    public username: string;

    @Column({ length: 250 })
    public company: string;

    /* @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.GUEST,
    }) */
    @Column({ length: 30, default: 'guest' })
    public role: UserRole;

    @Column({
        length: 250,
        select: false,
        name: 'password',
    })
    public passwordHash: string;

    set password(password: string) {
        const passHash = crypto.createHmac('sha256', password).digest('hex');
        this.passwordHash = passHash;
    }
}
