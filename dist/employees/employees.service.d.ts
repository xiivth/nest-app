import { PrismaService } from 'src/shared/prisma/prisma.service';
export declare class EmployeesService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<{
        total: number;
        length: number;
        data: {
            emp_no: number;
            first_name: string;
            last_name: string;
            hire_date: Date;
            Department: {
                department_name: string;
            };
        }[];
    }>;
    findAllWithPagination(page?: number, pageSize?: number): Promise<{
        total: number;
        length: number;
        data: {
            emp_no: number;
            first_name: string;
            last_name: string;
            hire_date: Date;
            Department: {
                department_name: string;
            };
        }[];
    }>;
}
