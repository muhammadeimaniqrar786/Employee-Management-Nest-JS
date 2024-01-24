import { ApiProperty } from "@nestjs/swagger";
import { EmployeeTask, EmployeeTasksStatus, EmployeesData } from "@prisma/client";

export class TaskEntity implements EmployeeTask {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty({ required: false, nullable: true })
    start: Date | null;

    @ApiProperty({ required: false, nullable: true })
    end: Date | null;

    @ApiProperty()
    assignedTo: EmployeesData;
    employee_id: number;

    @ApiProperty()
    assigner: EmployeesData;
    assigner_id: number;

    @ApiProperty()
    status: EmployeeTasksStatus;

    @ApiProperty({ required: false, default: new Date().toISOString() })
    created_at: Date;

    @ApiProperty({ required: false, default: new Date().toISOString() })
    updated_at: Date;

    @ApiProperty({ required: false, nullable: true })
    deleted_at: Date | null;
}
