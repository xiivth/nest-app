import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
export declare class DepartmentsController {
    private readonly departmentsService;
    constructor(departmentsService: DepartmentsService);
    create(createDepartmentDto: CreateDepartmentDto): Promise<{
        department_id: string;
        department_name: string | null;
    }>;
    findAll(): Promise<{
        department_id: string;
        department_name: string | null;
    }[]>;
    findAllBySQL(): Promise<unknown>;
    findOne(id: string): Promise<{
        Employee: {
            emp_no: number;
            birth_date: Date;
            first_name: string;
            last_name: string;
            gender: string;
            hire_date: Date;
            department_id: string | null;
        }[];
        _count: {
            Employee: number;
        };
    } & {
        department_id: string;
        department_name: string | null;
    }>;
    update(id: string, updateDepartmentDto: UpdateDepartmentDto): Promise<{
        department_id: string;
        department_name: string | null;
    }>;
    remove(id: string): Promise<{
        department_id: string;
        department_name: string | null;
    }>;
}
