import {Request,Response,NextFunction} from 'express';


export interface IUserController{
    getAllUsers:(req:Request,res:Response,next:NextFunction)=>void;
    getUsersInfo:(req:Request,res:Response,next:NextFunction)=>void;
    changeProfile:(req:Request,res:Response,next:NextFunction)=>void;
    

}