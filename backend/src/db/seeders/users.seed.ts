import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

export const seedUsers = async (prisma: PrismaService) => {
  const users: Prisma.UserCreateManyInput[] = [
    {
      id: 1,
      name: 'Saqib Hassan',
      username: 'saqib.hassan',
      email: 'saqib.hassan@example.com',
      password: '12345678',
    },
    {
      id: 2,
      name: 'Basit Ali',
      username: 'basit.ali',
      email: 'basit.ali@example.com',
      password: '12345678',
    },
    {
      id: 3,
      name: 'Shafqat Hussain',
      username: 'shafqat.hussain',
      email: 'shafqat.hussain@example.com',
      password: '12345678',
    },
  ];

  for (const user of users) {
    try {
      // Hash the password using bcrypt
      const hashedPassword = await bcrypt.hash(user.password, 10);

      await prisma.user.create({
        data: {
          ...user,
          password: hashedPassword,
        },
      });

      console.log('User created successfully:', user);
    } catch (error) {
      console.error('Error Creating User:', error);
    }
  }
};
