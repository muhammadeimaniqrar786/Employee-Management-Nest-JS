import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

export const seedRoles = async (prisma: PrismaService) => {
  const roles: Prisma.RoleCreateManyInput[] = [
    {
      id: 1,
      name: 'super admin',
    },
    {
      id: 2,
      name: 'admin',
    },
    {
      id: 3,
      name: 'user',
    },
  ];

  for (const role of roles) {
    try {
      await prisma.role.create({
        data: role
      });

      console.log('Role created successfully:', role);
    } catch (error) {
      console.error('Error creating role:', error);
    }
  }
};
