import { Tiket_Category } from "@prisma/client";
import { CategoryTiketM } from "../entities/entity.category";



export interface ITiketCategoryRepository{
    getAllCategoryInPlane:(planeId:number)=>Promise<Tiket_Category[]|null>;
    getById:(id:number)=>Promise<Tiket_Category|null>;
    createCategory:({planeId,coeff,count_tiket}:CategoryTiketM)=>Promise<Tiket_Category|null>;
}