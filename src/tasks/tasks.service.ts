import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/db/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) { }

  async create(createTaskDto: CreateTaskDto) {
    // Extract assignedTo and assigner from DTO
    const { assignedTo, assigner, ...taskData } = createTaskDto;

    // Convert assignedTo and assigner to Prisma input types
    const assignedToInput = {
      connect: { id: assignedTo.id }, // Adjust the ID based on your DTO structure
    };

    const assignerInput = {
      connect: { id: assigner.id }, // Adjust the ID based on your DTO structure
    };

    // Create task and associate with the related entities
    const createdTask = await this.prisma.employeeTask.create({
      data: {
        ...taskData,
        assignedTo: assignedToInput,
        assigner: assignerInput,
      },
    });

    return createdTask;
  }

  findAll() {
    return this.prisma.employeeTask.findMany({ where: { deleted_at: null } });
  }

  findOne(id: number) {
    return this.prisma.employeeTask.findUnique({ where: { id, deleted_at: null } });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const existingTask = await this.findOne(id);

    if (!existingTask) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    // Convert DTO data to Prisma update input
    const updateTaskInput = {
      name: updateTaskDto.name ? updateTaskDto.name : existingTask.name,
      start: updateTaskDto.start ? updateTaskDto.start : existingTask.start,
      end: updateTaskDto.end ? updateTaskDto.end : existingTask.end,
      status: updateTaskDto.status ? updateTaskDto.status : existingTask.status,
      assignedTo: updateTaskDto.assignedTo
        ? { connect: { id: updateTaskDto.assignedTo.id } }
        : { connect: { id: existingTask.employee_id } },
      assigner: updateTaskDto.assigner
        ? { connect: { id: updateTaskDto.assigner.id } }
        : { connect: { id: existingTask.assigner_id } },
    };

    // Update task with the provided data
    const updatedTask = await this.prisma.employeeTask.update({
      where: { id },
      data: updateTaskInput,
    });

    return updatedTask;
  }

  async remove(id: number) {
    const isExist = await this.findOne(id);

    if (!isExist) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    const isDeleted = await this.prisma.employeeTask.update({
      where: { id },
      data: {
        "deleted_at": new Date()
      }
    });

    if (isDeleted) {
      return `Task "${isDeleted.name}" is deleted successfully.`;
    } else {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }
}
