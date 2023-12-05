import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

export const seedPermissions = async (prisma: PrismaService) => {
  const permissions: Prisma.PermissionsCreateManyInput[] = [
    {
      id: 1,
      name: 'create user',
    },
    {
      id: 2,
      name: 'update user',
    },
    {
      id: 3,
      name: 'create permission',
    },
    {
      id: 4,
      name: 'update permission',
    },
    {
      id: 5,
      name: 'create role',
    },
    {
      id: 6,
      name: 'update role',
    },
    {
      id: 7,
      name: 'assign permissions to role',
    },
    {
      id: 8,
      name: 'assign role to user',
    },
    {
      id: 9,
      name: 'create task',
    },
    {
      id: 10,
      name: 'update task',
    },
  ];

  for (const permission of permissions) {
    try {
      await prisma.permissions.create({
        data: permission,
      });
      
      console.log('Permission Created Successfully:', permission);
    } catch (error) {
      console.error('Error seeding permissions:', error);
    }
  }
};
