import 'reflect-metadata';
import { NextFunction, Request, Response} from "express";
import { ITiketCategoryController } from './interface/tiket.category.controller.interface';
import { inject, injectable } from 'inversify';
import { ITiketCategoryService } from './interface/tiket.category.service.interface';
import { TYPES } from '../TYPES';
import { CategoryTiketM } from './entities/entity.category';
import { BaseController } from '../common/base.controller';
import { HTTPError } from '../erors/http-error.class';
import { IMiddleware } from '../common/Middleware.interface';
import { AuthGvards } from '../guards/auth.guard';


@injectable()
export class TiketCategoryController extends BaseController implements ITiketCategoryController{
    constructor(
        @inject(TYPES.TiketCategoryService) private tiketCategoryService:ITiketCategoryService,
        @inject(TYPES.AuthMiddleware) private authMiddleware:IMiddleware
        )
    {
        super();
        this.bindRoutes([
            {
               path:'/:id', 
               method:'get', 
               func:this.getInfo,
               middlewares:[this.authMiddleware], 
            },
            {
               path:'/:planeId', 
               method:'get', 
               func:this.getAllCategory,
               middlewares:[this.authMiddleware], 
            },
            {
               path:'/create', 
               method:'post', 
               func:this.createCategory,
               middlewares:[this.authMiddleware,new AuthGvards('ADMIN')], 
            },

        ]);
    }

    async getInfo(req:Request,res:Response,next:NextFunction):Promise<void>{
        try{
            const categoryId=Number(req.params.id);
            if (!categoryId) return next (new HTTPError(422,"некорректный запрос"))
            const category=await this.tiketCategoryService.getById(categoryId);
            this.ok(res,category);
        }catch(e) {
            return next(e)
        }  

    }

    async getAllCategory(req:Request,res:Response,next:NextFunction):Promise<void>{
        try{
            const plainId=Number(req.params.planeId);
            if (!plainId) return next (new HTTPError(422,"некорректный запрос"))
            const massCategory=await this.tiketCategoryService.getAllCategoryInPlane(plainId);
            this.ok(res,massCategory);
        }catch(e){
            return next(e)
        }
    }

    async createCategory(req:Request,res:Response,next:NextFunction):Promise<void>{
        const entityCategory= new CategoryTiketM(
            req.body.planeId,
            req.body.coeff,
            req.body.count_tiket,
        )
        if (!entityCategory) return next (new HTTPError(422,"некорректный запрос"));
        const category=await this.tiketCategoryService.createCategory(entityCategory);
        this.ok(res,category)
    }

}