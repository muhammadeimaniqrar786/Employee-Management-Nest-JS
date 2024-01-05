import { ApiProperty } from "@nestjs/swagger";

export class RoleEntity {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty({ required: false, default: new Date().toISOString() })
    created_at: Date;

    @ApiProperty({ required: false, default: new Date().toISOString() })
    updated_at: Date;

    @ApiProperty({ required: false, nullable: true })
    deleted_at: Date | null;
}
