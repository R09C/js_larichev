import{IUserController}from './UserController.interface';
import {Request, Response, NextFunction } from 'express';
import 'reflect-metadata';
import {BaseController} from '../common/base.controller';
import { TYPES } from '../TYPES';
import {ILoggerServise} from '../logger/logger.service.interface';
import {inject,injectable} from 'inversify';
import { HTTPError } from '../erors/http-error.class';

@injectable()
export class UserController extends BaseController implements IUserController{
    constructor(
        @inject(TYPES.LoggerService) private loggerService:ILoggerServise,
        // @inject(TYPES.LoggerService) private loggerService:ILoggerServise,
        // @inject(TYPES.LoggerService) private loggerService:ILoggerServise,
    ){
        super();
        this.bindRoutes([
            {
                path:'/',
                method:'get',
                func:this.getAllUsers, 
            },
            {
                path:'/:id',
                method:'get',
                func:this.getUsersInfo, 

            },
            {
                path:'/update',
                method:'put',
                func:this.changeProfile, 
                middlewares:[],
            },
        ]);
    }
    async getAllUsers(req: Request, res: Response, next: NextFunction):Promise<void>{
        
     }
     async getUsersInfo(req: Request, res: Response, next: NextFunction):Promise<void>{

     }
     async changeProfile(req: Request, res: Response, next: NextFunction):Promise<void>{

     }


}