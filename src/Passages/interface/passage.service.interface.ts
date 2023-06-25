import {Passage} from "@prisma/client";
import {PassageM} from "../entities/passage.entity";

export interface IPassageService{
    GetAllPassage:()=>Promise<Omit<Passage,'from'|'to'|'timefrom'|'timeto'>[]>;
    GetIdPassage:(id:number)=>Promise<Passage|null>;
    ChangePassage:(id:number,quantity:number)=>Promise<Passage|null>;
    CreatePassage:(body:PassageM)=>Promise<Passage>;
}