import { Tiket_Category } from "@prisma/client";
import { CategoryTiketM } from "../entities/entity.category";

export interface ITiketCategoryService{
    getAllCategoryInPlane:(planeId:number)=>Promise<Tiket_Category[]|null>;
    getById:(id:number)=>Promise<Tiket_Category|null>;
    createCategory:(entity:CategoryTiketM)=>Promise<Tiket_Category|null>;
}