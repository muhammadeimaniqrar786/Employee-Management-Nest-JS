import { Prisma, PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function seed() {

    const employees = [
        {
            id: 1,
            name: 'Saqib Hassan',
            username: 'saqib.hassan',
            email: 'saqib.hassan@example.com',
            password: '12345678',
            address: 'Dummy address',
            phone: '01235426227',
            designation: 'Project Manager'
        }, {
            id: 2,
            name: 'Basit Ali',
            username: 'basit.ali',
            email: 'basit.ali@example.com',
            password: '12345678',
            address: 'Dummy address',
            phone: '01235426227',
            designation: 'Senior Mobile App Developer'
        }, {
            id: 3,
            name: 'Shafqat Hussain',
            username: 'shafqat.hussain',
            email: 'shafqat.hussain@example.com',
            password: '12345678',
            address: 'Dummy address',
            phone: '01235426227',
            designation: 'Junior Mobile App Developer'
        }
    ];

    for (const employee of employees) {
        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(employee.password, 10);

        await prisma.employee.create({
            data: {
                ...employee,
                password: hashedPassword
            }
        });
    }

    const employeeTasks: Prisma.EmployeeTasksCreateManyInput[] = [
        {
            name: 'Mobile App Development',
            employee_id: 2,
            assigner_id: 1
        },
        {
            name: 'Mobile App Navigation Development',
            employee_id: 3,
            assigner_id: 2
        },
    ];

    await prisma.employeeTasks.createMany({
        data: employeeTasks
    });
}

seed()
    .catch((error) => {
        throw error;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
