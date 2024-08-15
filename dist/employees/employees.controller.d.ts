import { EmployeesService } from './employees.service';
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
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
    create(createEmployeeDto: any): string;
    searchEmployee(query: any): string;
    searchEmployeeV2(query: any): string;
    findAllWith(query: any): Promise<{
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
    findOne(params: any): string;
}
