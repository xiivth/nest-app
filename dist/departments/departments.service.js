"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../shared/prisma/prisma.service");
const client_1 = require("@prisma/client");
let DepartmentsService = class DepartmentsService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createDepartmentDto) {
        try {
            const department = await this.prismaService.department.create({
                data: createDepartmentDto,
            });
            return department;
        }
        catch (e) {
            if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (e.code === 'P2000') {
                    throw new common_1.BadRequestException('รหัสแผนก ต้องไม่เกิน 2 ตัวอักษร โปรดลองใหม่');
                }
                if (e.code === 'P2002') {
                    throw new common_1.ConflictException('ข้อมูลซ้ำ โปรดลองใหม่');
                }
            }
            throw new common_1.HttpException(e, 500);
        }
    }
    async findAll() {
        return await this.prismaService.department.findMany({
            orderBy: { department_id: 'desc' },
        });
    }
    async findOne(id) {
        const department = await this.prismaService.department.findUnique({
            where: { department_id: id },
            include: { _count: true, Employee: true },
        });
        if (!department) {
            throw new common_1.NotFoundException('ไม่พบข้อมูลในระบบ');
        }
        return department;
    }
    async update(id, updateDepartmentDto) {
        await this.findOne(id);
        const department = await this.prismaService.department.update({
            data: updateDepartmentDto,
            where: { department_id: id },
        });
        return department;
    }
    async remove(id) {
        await this.findOne(id);
        const department = await this.prismaService.department.delete({
            where: { department_id: id },
        });
        return department;
    }
    async findAllBySQL() {
        return await this.prismaService
            .$queryRaw `select * from Department order by department_id`;
    }
};
exports.DepartmentsService = DepartmentsService;
exports.DepartmentsService = DepartmentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DepartmentsService);
//# sourceMappingURL=departments.service.js.map