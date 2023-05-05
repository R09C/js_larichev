import express, {Express} from 'express';
import { Server } from 'http';
import 'reflect-metadata';
import{inject,injectable} from 'inversify';
import {TYPES} from './TYPES'
import{ILoggerServise}from './logger/logger.service.interface'

@injectable()
export class App {
    app:Express;
    server: Server;
    port:number;
    
    constructor(
        @inject(TYPES.LoggerService) private readonly loggerService:ILoggerServise ,
        @inject(TYPES.UserController) private readonly userController: ,
        @inject(TYPES.AuthController) private readonly authController: ,

        

    ){
        
        this.app=express();
        this.port=8000;

    }
    useMiddleware():void{

    }
    UseRouter():void{
        this.app.use('/', this.userController.router)
        this.app.use('/auth', this.authController.router)
    }
    useExeptionFilters(): void {

    }
    public async init():Promise<void>{
        this.useMiddleware();
        this.UseRouter();
        this.useExeptionFilters();
    }

}
