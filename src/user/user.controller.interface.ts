import {Request,Response,NextFunction} from 'express';


export interface IUserController{
    getAllUsers:(req:Request,res:Response,next:NextFunction)=>Promise<void>;
    getUsersInfo:(req:Request,res:Response,next:NextFunction)=>Promise<void>;
    changeProfile:(req:Request,res:Response,next:NextFunction)=>Promise<void>;
}