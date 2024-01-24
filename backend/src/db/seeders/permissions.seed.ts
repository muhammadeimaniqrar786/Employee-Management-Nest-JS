import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

export const seedPermissions = async (prisma: PrismaService) => {
  const permissions: Prisma.PermissionCreateManyInput[] = [
    {
      id: 1,
      name: 'user'
    },
    {
      id: 2,
      name: 'create user',
      parent_id: 1
    },
    {
      id: 3,
      name: 'update user',
      parent_id: 1
    },
    {
      id: 4,
      name: 'permission',
    },
    {
      id: 5,
      name: 'create permission',
      parent_id: 4
    },
    {
      id: 6,
      name: 'update permission',
      parent_id: 4
    },
    {
      id: 7,
      name: 'role',
    },
    {
      id: 8,
      name: 'create role',
      parent_id: 7
    },
    {
      id: 9,
      name: 'update role',
      parent_id: 7
    },
    {
      id: 10,
      name: 'assign permissions to role',
    },
    {
      id: 11,
      name: 'assign role to user',
    },
    {
      id: 12,
      name: 'task',
    },
    {
      id: 13,
      name: 'create task',
      parent_id: 12
    },
    {
      id: 14,
      name: 'update task',
      parent_id: 12
    },
  ];

  for (const permission of permissions) {
    try {
      await prisma.permission.create({
        data: permission,
      });

      console.log('Permission Created Successfully:', permission);
    } catch (error) {
      console.error('Error seeding permissions:', error);
    }
  }
};
