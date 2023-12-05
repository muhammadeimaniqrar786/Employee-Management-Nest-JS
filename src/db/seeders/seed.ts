import { PrismaClient } from '@prisma/client';
import { seedPermissions } from './permissions.seed';
import { seedRoles } from './roles.seed';
import { seedRoleHasPermissions } from './RoleHasPermissions.seed';
import { seedUsers } from './users.seed';
import { seedUserHasRoles } from './userHasRoles.seed';
import { seedEmployeesData } from './employeesData.seed';
import { seedEmployeeTasks } from './employeeTasks.seed';
import { PrismaService } from '../prisma.service';

const prisma = new PrismaClient();
const prismaService = new PrismaService();

async function seed() {
  await seedPermissions(prismaService);
  await seedRoles(prismaService);
  await seedRoleHasPermissions(prismaService);
  await seedUsers(prismaService);
  await seedUserHasRoles(prismaService);
  await seedEmployeesData(prismaService);
  await seedEmployeeTasks(prismaService);
}

seed()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
