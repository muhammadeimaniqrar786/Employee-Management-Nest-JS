import { ApiProperty } from '@nestjs/swagger';

export class AuthEntity {
    @ApiProperty()
    name: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    accessToken: string;
}