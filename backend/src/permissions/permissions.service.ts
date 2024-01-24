import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { PrismaService } from 'src/db/prisma/prisma.service';

@Injectable()
export class PermissionsService {
  constructor(private prisma: PrismaService) { }

  create(createPermissionDto: CreatePermissionDto) {
    return this.prisma.permission.create({
      data: createPermissionDto
    });
  }

  findAll() {
    return this.prisma.permission.findMany({
      where: {
        deleted_at: null
      }
    });
  }

  findOne(id: number) {
    return this.prisma.permission.findUnique({
      where: { id }
    });
  }

  async update(id: number, updatePermissionDto: UpdatePermissionDto, permission: UpdatePermissionDto) {
    const updatedPermissionData = {
      name: updatePermissionDto.name ? updatePermissionDto.name : permission.name,
      parent_id: updatePermissionDto.parent_id ? updatePermissionDto.parent_id : permission.parent_id,
    };

    const updatedPermission = await this.prisma.permission.update({
      where: { id },
      data: updatedPermissionData
    });

    return updatedPermission;
  }

  remove(id: number) {
    return this.prisma.permission.update({
      where: { id },
      data: {
        deleted_at: new Date()
      }
    });
  }
}
