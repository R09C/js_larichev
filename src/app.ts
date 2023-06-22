import express, {Express} from 'express';
import { Server } from 'http';
import 'reflect-metadata';
import{inject,injectable} from 'inversify';
import {TYPES} from './TYPES';
import{ILoggerServise}from './logger/logger.service.interface';
import{UserController}from './user/UserController';
import{IExeptionFilter}from './erors/exeption.filter.interface';
import { IMiddleware } from './common/Middleware.interface';

@injectable()
export class App {
    app:Express;
    server: Server;
    port:number;
    
    constructor(
        @inject(TYPES.LoggerService) private readonly loggerService:ILoggerServise ,
        @inject(TYPES.UserController) private readonly userController:UserController ,
        @inject(TYPES.ExeptionFilter) private readonly exeptionFilter: IExeptionFilter,
        @inject(TYPES.AuthMiddleware) private readonly  authMiddleware: IMiddleware,
        

        

    ){
        
        this.app=express();
        this.port=8000;
        

    }
    useMiddleware():void{

    }
    UseRouter():void{
        this.app.use('/', this.userController.router)
        // this.app.use('/auth', this.authController.router)
    }
    useExeptionFilters(): void {
        this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter))

    }
    public async init():Promise<void>{
        this.useMiddleware();
        this.UseRouter();
        this.useExeptionFilters();
        this.server=this.app.listen(this.port);
        this.loggerService.info(`[APP] Сервер запущен на ${this.port} порту`);
    }

    public close():void{
        this.server.close();
    }

}
