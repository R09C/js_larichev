import {Request,Response,NextFunction, Router} from 'express';


export interface IUserController{
    router:Router;
    getAllUsers:(req:Request,res:Response,next:NextFunction)=>void;
    getUsersInfo:(req:Request,res:Response,next:NextFunction)=>void;
    changeProfile:(req:Request,res:Response,next:NextFunction)=>void;
    

}