import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

export const seedRoleHasPermissions = async (prisma: PrismaService) => {
  const roleHasPermissions: Prisma.RoleHasPermissionCreateManyInput[] = [
    {
      role_id: 2,
      permission_id: 2,
    },
    {
      role_id: 2,
      permission_id: 3,
    },
    {
      role_id: 2,
      permission_id: 8,
    },
    {
      role_id: 2,
      permission_id: 9,
    },
    {
      role_id: 2,
      permission_id: 10,
    },
    {
      role_id: 2,
      permission_id: 11,
    },
  ];

  try {
    await prisma.roleHasPermission.createMany({
      data: roleHasPermissions
    });

    console.log('Permissions successfully assigned to Roles.');
  } catch (error) {
    console.error('Error assigning permission to role: ', error);
  }
};
