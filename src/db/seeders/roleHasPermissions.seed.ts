import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

export const seedRoleHasPermissions = async (prisma: PrismaService) => {
  const roleHasPermissions: Prisma.RoleHasPermissionsCreateManyInput[] = [
    {
      role_id: 2,
      permission_id: 1,
    },
    {
      role_id: 2,
      permission_id: 2,
    },
    {
      role_id: 2,
      permission_id: 5,
    },
    {
      role_id: 2,
      permission_id: 6,
    },
    {
      role_id: 2,
      permission_id: 7,
    },
    {
      role_id: 2,
      permission_id: 8,
    },
  ];

  try {
    await prisma.roleHasPermissions.createMany({
      data: roleHasPermissions
    });
    
    console.log('Permissions successfully assigned to Roles.');
  } catch (error) {
    console.error('Error assigning permission to role: ', error);
  }
};
