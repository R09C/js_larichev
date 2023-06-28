import { NextFunction, Request, Response, Router } from "express";


export interface ITiketCategoryController{
    router:Router;
    getInfo:(req:Request,res:Response,next:NextFunction)=>Promise<void>;
    getAllCategory:(req:Request,res:Response,next:NextFunction)=>Promise<void>;
    createCategory:(req:Request,res:Response,next:NextFunction)=>Promise<void>;
}