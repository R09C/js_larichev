import { inject, injectable } from "inversify";
import { ITiketCategoryRepository } from "./interface/tiket.category.repository.interface";
import { TYPES } from "../TYPES";
import { PrismaService } from "../database/prisma.service";
import { Tiket_Category } from "@prisma/client";
import { CategoryTiketM } from "./entities/entity.category";
import 'reflect-metadata';

@injectable()
export class TiketCategoryRepository implements  ITiketCategoryRepository{
    constructor(@inject(TYPES.PrismaService) private prismaService:PrismaService){}

    async getAllCategoryInPlane(planeId: number):Promise<Tiket_Category[] | null>{
        return this.prismaService.client.tiket_Category.findMany({
            where:{
                planeId
            },
        });
    }

    async getById(id: number):Promise<Tiket_Category | null>{
        return this.prismaService.client.tiket_Category.findFirst({
            where:{
                id
            }
        });  
    }

    async createCategory({planeId,coeff,count_tiket}: CategoryTiketM):Promise<Tiket_Category | null>{
        return this.prismaService.client.tiket_Category.create({
            data:{
                planeId,
                coeff,
                count_tiket,
            }
        });
    }

}