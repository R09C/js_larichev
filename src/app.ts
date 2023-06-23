import express, {Express} from 'express';
import { Server } from 'http';
import 'reflect-metadata';
import{inject,injectable} from 'inversify';
import {TYPES} from './TYPES';
import{ILoggerServise}from './logger/logger.service.interface';
import{UserController}from './user/UserController';
import{IExeptionFilter}from './erors/exeption.filter.interface';
import { PrismaService } from './database/prisma.service';
import { IAuthController } from './auth/interface/auth.controller.intreface';
import { IUserController } from './user/interface/UserController.interface';
import { IConfigService } from './config/config.service.interface';

@injectable()
export class App {
    app:Express;
    server: Server;
    port:number;
    
    constructor(
        @inject(TYPES.LoggerService) private readonly loggerService:ILoggerServise ,
        @inject(TYPES.UserController) private readonly userController:IUserController ,
        @inject(TYPES.ExeptionFilter) private readonly exeptionFilter: IExeptionFilter,
        @inject(TYPES.PrismaService) private readonly  prismaService: PrismaService,
        @inject(TYPES.AuthController) private readonly  authController: IAuthController,        
        @inject(TYPES.ConfigService) private readonly  configService: IConfigService,        

        

        

    ){
        
        this.app=express();
        this.port=Number(configService.get('PORT'));
        

    }
    useMiddleware():void{

    }
    UseRouter():void{
        this.app.use('/users', this.userController.router)
        this.app.use('/auth', this.authController.router)
    }
    useExeptionFilters(): void {
        this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter))

    }
    public async init():Promise<void>{
        this.useMiddleware();
        this.UseRouter();
        this.useExeptionFilters();
        await this.prismaService.connect();
        this.server=this.app.listen(this.port);
        this.loggerService.info(`[APP] Сервер запущен на ${this.port} порту`);
    }

    public close():void{
        this.server.close();
    }

}
