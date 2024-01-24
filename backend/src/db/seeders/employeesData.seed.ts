import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

export const seedEmployeesData = async (prisma: PrismaService) => {
  const employeesData: Prisma.EmployeesDataCreateManyInput[] = [
    {
      user_id: 1,
      address: 'Dummy address',
      phone: '01235426227',
      designation: 'Project Manager',
    },
    {
      user_id: 2,
      address: 'Dummy address',
      phone: '01235426227',
      designation: 'Senior Mobile App Developer',
    },
    {
      user_id: 3,
      address: 'Dummy address',
      phone: '01235426227',
      designation: 'Junior Mobile App Developer',
    },
  ];

  for (const data of employeesData) {
    try {
      await prisma.employeesData.create({
        data: data,
      });

      console.log('Employee Data seeded successfully:', data);
    } catch (error) {
      console.error('Error seeding employee data', error);
    }
  }
};
