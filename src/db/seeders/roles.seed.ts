import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

export const seedRoles = async (prisma: PrismaService) => {
  const roles: Prisma.RolesCreateManyInput[] = [
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
      await prisma.roles.create({
        data: role
      });

      console.log('Role created successfully:', role);
    } catch (error) {
      console.error('Error creating role:', error);
    }
  }
};
