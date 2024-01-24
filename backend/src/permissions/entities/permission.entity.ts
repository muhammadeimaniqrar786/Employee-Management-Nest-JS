import { ApiProperty } from "@nestjs/swagger";

export class PermissionEntity {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty({ required: false, nullable: true })
    parent_id: number | null;

    @ApiProperty({ required: false, default: new Date().toISOString() })
    created_at: Date | null;

    @ApiProperty({ required: false, default: new Date().toISOString() })
    updated_at: Date | null;

    @ApiProperty({ required: false, nullable: true })
    deleted_at: Date | null;
}
