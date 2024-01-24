import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    create(createUserDto: CreateUserDto): Promise<UserEntity> {
        return this.prisma.user.create({
            data: createUserDto
        });
    }

    findAll() {
        return this.prisma.user.findMany({
            where: { deleted_at: null },
            select: {
                id: true,
                name: true,
                username: true,
                email: true,
                created_at: true,
                updated_at: true,
            }
        });
    }

    async findOne(id: number): Promise<UserEntity> {
        const user = await this.prisma.user.findUnique({
            where: { id, deleted_at: null },
            select: {
                id: true,
                name: true,
                username: true,
                email: true,
                created_at: true,
                updated_at: true,
            }
        });

        return user as UserEntity;
    }

    async update(id: number, updateUserDto: UpdateUserDto, user: UserEntity): Promise<UserEntity> {
        const updatedUserData = {
            name: updateUserDto.name ? updateUserDto.name : user.name,
            username: updateUserDto.username ? updateUserDto.username : user.username,
            email: updateUserDto.email ? updateUserDto.email : user.email,
        };

        const udpatedUser = await this.prisma.user.update({
            where: { id },
            data: updatedUserData
        })

        return udpatedUser;
    }

    delete(id: number): Promise<UserEntity> {
        return this.prisma.user.update({
            where: { id },
            data: {
                deleted_at: new Date()
            }
        })
    }
}
