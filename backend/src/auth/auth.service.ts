import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/db/prisma/prisma.service';
import { AuthEntity } from './entity/auth.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwtService: JwtService) { }

    async login(email: string, password: string): Promise<AuthEntity> {
        // Step 1: Fetch a user with the given email
        const user = await this.prisma.user.findUnique({ where: { email: email } });

        // If User not found, throw an error
        if (!user) {
            throw new NotFoundException(`No User found for ${email}`);
        }

        // Step 2: check if password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);

        // If password does not match, throw an error
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid password');
        }

        // Step 3: Generate a JWT Token containing the user's id
        return {
            name: user.name,
            username: user.username,
            email: user.email,
            accessToken: this.jwtService.sign({ userId: user.id }),
        }
    }
}
