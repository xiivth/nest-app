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
exports.AuthsService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const prisma_service_1 = require("../shared/prisma/prisma.service");
const jwt_1 = require("@nestjs/jwt");
let AuthsService = class AuthsService {
    constructor(prismaService, jwtService) {
        this.prismaService = prismaService;
        this.jwtService = jwtService;
    }
    async register(registerDto) {
        try {
            const salt = await (0, bcrypt_1.genSalt)(10);
            const hashedPassword = await (0, bcrypt_1.hash)(registerDto.password, salt);
            const newUser = await this.prismaService.user.create({
                data: { email: registerDto.email, password: hashedPassword },
            });
            return newUser;
        }
        catch (error) {
            throw new common_1.HttpException(error, 500);
        }
    }
    async login(logindto) {
        const user = await this.prismaService.user.findUnique({
            where: { email: logindto.email },
        });
        if (!user) {
            throw new common_1.NotFoundException('ไม่พบผู้ใช้ในระบบ');
        }
        const isValid = await (0, bcrypt_1.compare)(logindto.password, user.password);
        if (!isValid) {
            throw new common_1.UnauthorizedException('รหัสผ่านไม่ถูกต้อง');
        }
        const token = await this.jwtService.signAsync({
            user_id: user.id,
            user_permission: user.permission,
        }, { secret: process.env.JWT_KEY });
        return { access_token: token };
    }
};
exports.AuthsService = AuthsService;
exports.AuthsService = AuthsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthsService);
//# sourceMappingURL=auths.service.js.map