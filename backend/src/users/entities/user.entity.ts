import { ApiProperty } from "@nestjs/swagger";

export class UserEntity {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    email: string;

    @ApiProperty({ required: false, default: new Date().toISOString() })
    created_at: Date;

    @ApiProperty({ required: false, default: new Date().toISOString() })
    updated_at: Date;

    @ApiProperty({ required: false, nullable: true })
    deleted_at: Date | null;
}