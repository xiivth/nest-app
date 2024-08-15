"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalHelpersService = void 0;
const common_1 = require("@nestjs/common");
const date_fns_1 = require("date-fns");
const locale_1 = require("date-fns/locale");
let GlobalHelpersService = class GlobalHelpersService {
    getThaiDate() {
        return (0, date_fns_1.format)(new Date(), 'dd MMMM yyyyy HH:mm:ss', { locale: locale_1.th });
    }
};
exports.GlobalHelpersService = GlobalHelpersService;
exports.GlobalHelpersService = GlobalHelpersService = __decorate([
    (0, common_1.Injectable)()
], GlobalHelpersService);
//# sourceMappingURL=global-helpers.service.js.map