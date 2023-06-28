import { Tiket_Category } from "@prisma/client";
import { CategoryTiketM } from "./entities/entity.category";
import { ITiketCategoryService } from "./interface/tiket.category.service.interface";
import { inject, injectable } from "inversify";
import { TYPES } from "../TYPES";
import { ITiketCategoryRepository } from "./interface/tiket.category.repository.interface";
import 'reflect-metadata';

@injectable()
export class TiketCategoryService implements ITiketCategoryService{  

    constructor(@inject(TYPES.TiketCategoryRepository)private tiketCategoryRepository:ITiketCategoryRepository){}

    async getAllCategoryInPlane(planeId:number):Promise<Tiket_Category[]|null>{
        return this.tiketCategoryRepository.getAllCategoryInPlane(planeId);
    }

    async getById(id:number):Promise<Tiket_Category|null>{
        return this.tiketCategoryRepository.getById(id);
    }

    async createCategory(entity:CategoryTiketM):Promise<Tiket_Category|null>{
        return this.tiketCategoryRepository.createCategory(entity);
    }

}