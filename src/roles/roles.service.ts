import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from 'src/db/prisma/prisma.service';
import { Role } from '@prisma/client';

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) { }

  create(createRoleDto: CreateRoleDto) {
    return this.prisma.role.create({
      data: createRoleDto
    });
  }

  findAll() {
    return this.prisma.role.findMany({
      where: {
        deleted_at: null
      }
    });
  }

  findOne(id: number) {
    return this.prisma.role.findUnique({
      where: { id },
      include: { permissions: true }
    });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto, role: UpdateRoleDto) {
    const roleData = {
      name: updateRoleDto.name ? updateRoleDto.name : role.name,
    };

    const updatedRole = await this.prisma.role.update({
      where: { id },
      data: roleData
    });

    return updatedRole;
  }

  remove(id: number) {
    return this.prisma.role.update({
      where: { id },
      data: {
        deleted_at: new Date()
      }
    });
  }

  async assignPermissionToRole(roleId: number, permissionIds: number[]): Promise<Role> {
    
    const role = await this.findOne(roleId);

    if (!role) {
      throw new NotFoundException(`Could not find role.`);
    }

    // Connecting new permissions:
    const updatedRole = await this.prisma.role.update({
      where: { id: roleId },
      data: {
        permissions: {
          connect: permissionIds.map((id) => ({ id }))
        }
      },
      include: { permissions: true }
    })

    // disconnecting old permissions:
    const oldPermissionIds = role.permissions.map((permission) => permission.id);
    const permissionsToRemove = oldPermissionIds.filter((id) => !permissionIds.includes(id));

    await this.prisma.roleHasPermission.updateMany({
      where: {
        role_id: roleId,
        permission_id: {
          in: permissionsToRemove
        }
      },
      data: {
        deleted_at: new Date(),
      }
    });

    return updatedRole;
  }
}
