import{IUserController}from './user.controller.interface';
import {Request, Response, NextFunction } from 'express';
import 'reflect-metadata';
import {BaseController} from '../common/base.controller';
import { TYPES } from '../TYPES';
import {ILoggerServise} from '../logger/logger.service.interface';
import {inject,injectable} from 'inversify';

@injectable
export class UserController extends BaseController implements IUserController{
    constructor(
        @inject(TYPES.LoggerService) private loggerService:ILoggerServise,
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