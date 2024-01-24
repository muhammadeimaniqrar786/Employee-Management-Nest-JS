import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from 'src/db/prisma/prisma.service';
import { Prisma, Role } from '@prisma/client';

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) { }

  create(createRoleDto: CreateRoleDto) {
    return this.prisma.role.create({
      data: createRoleDto
    });
  }

  async findAll() {
    const roles = await this.prisma.role.findMany({
      where: {
        deleted_at: null
      },
      include: { permissions: { where: { deleted_at: null }, select: { permission: true } } }
    });

    if (!roles) {
      return null;
    }

    return roles.map((role) => {
      const permissions = role.permissions.map(p => p.permission);

      return {
        id: role.id,
        name: role.name,
        created_at: role.created_at,
        updated_at: role.updated_at,
        deleted_at: role.deleted_at,
        permissions: permissions
      };
    });
  }

  async findOne(id: number) {
    const role = await this.prisma.role.findUnique({
      where: { id },
      include: { permissions: { where: { deleted_at: null }, select: { permission: true } } }
    });

    if (!role) {
      return null;
    }

    const permissions = role.permissions.map((p) => p.permission);

    const flattenedRole = {
      id: role.id,
      name: role.name,
      created_at: role.created_at,
      updated_at: role.updated_at,
      deleted_at: role.deleted_at,
      permissions: permissions,
    };

    return flattenedRole;
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

    const oldPermissionIds = role.permissions.map((permission) => permission.id);
    const permissionsToRemove = oldPermissionIds.filter((id) => !permissionIds.includes(id));
    const permissionsToCreate = permissionIds.filter((id) => !oldPermissionIds.includes(id));

    // Map the permissionIds to create an array of RoleHasPermissionCreateInput objects
    const roleHasPermissions: Prisma.RoleHasPermissionCreateManyInput[] = permissionsToCreate.map(permissionId => ({
      role_id: roleId,
      permission_id: permissionId,
    }));

    // Create multiple entries in the RoleHasPermission table
    await this.prisma.roleHasPermission.createMany({
      data: roleHasPermissions,
    });

    // disconnecting old permissions:

    if (permissionsToRemove.length > 0) {
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
    }

    const updatedRole = await this.findOne(roleId);

    return updatedRole;
  }
}
