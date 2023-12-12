import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

export const seedEmployeeTasks = async (prisma: PrismaService) => {
  const tasks: Prisma.EmployeeTaskCreateManyInput[] = [
    {
      name: 'Mobile App Development',
      employee_id: 2,
      assigner_id: 1,
      status: 'pending',
    },
    {
      name: 'Mobile App Navigation Development',
      employee_id: 3,
      assigner_id: 2,
      status: 'inactive',
    },
  ];

  for (const task of tasks) {
    try {
      await prisma.employeeTask.create({
        data: task
      });

      console.log('Task assigned to User:', task);
    } catch (error) {
      console.error('Error seeding employee task:', error);
    }
  }
};
