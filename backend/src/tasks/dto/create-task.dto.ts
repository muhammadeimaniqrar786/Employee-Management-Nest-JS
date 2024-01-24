import { ApiProperty } from "@nestjs/swagger";
import { EmployeeTasksStatus, EmployeesData } from "@prisma/client";
import { IsDate, IsEmpty, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @IsDate()
    @IsOptional()
    @IsNotEmpty()
    @ApiProperty({ required: false })
    start?: Date;

    @IsDate()
    @IsOptional()
    @IsNotEmpty()
    @ApiProperty({ required: false })
    end?: Date;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    assignedTo: EmployeesData; // Represents the related EmployeesData for assignedTo

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    assigner: EmployeesData; // Represents the related EmployeesData for assigner

    @IsString()
    @IsNotEmpty()
    @IsEnum(EmployeeTasksStatus)
    @ApiProperty()
    status: EmployeeTasksStatus;
}
