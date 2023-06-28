export class CategoryTiketM{
    constructor(
        private _planeId:number,
        private _coeff:number,
        private _count_tiket:number,
    ){}

    get planeId():number{
        return this._planeId
    } 

    get coeff():number{
        return this._coeff 
    } 

    get count_tiket():number{
        return this._count_tiket
    } 

}