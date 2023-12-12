import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

export const seedUserHasRoles = async (prisma: PrismaService) => {
  const userHasRoles: Prisma.UserHasRoleCreateManyInput[] = [
    {
      role_id: 3,
      user_id: 1,
    },
    {
      role_id: 3,
      user_id: 2,
    },
    {
      role_id: 3,
      user_id: 3,
    },
  ];

  try {
    await prisma.userHasRole.createMany({
      data: userHasRoles,
    });

    console.log('Roles successfully assigned to User.');

  } catch (error) {
    console.error('Error assigning roles to user:', error);

  }
};
