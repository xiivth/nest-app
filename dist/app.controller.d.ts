import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHomeAPI(): {
        message: string;
        app_name: string;
        app_version: string;
    };
    getHello(): string;
}
