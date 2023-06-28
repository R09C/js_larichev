export class TiketGroupM{
    constructor(
        private _price:number,
        private _passageId:number,
        private _tiket_CategoryId:number,
        private _basketId:number|null=null,
    ){}
    
    get price():number{
        return this._price;
    }

    get passageId():number{
        return this._passageId;
    }

    get tiket_CategoryId():number{
        return this._tiket_CategoryId;
    }

    get basketId():number|null{
        return this._basketId;
    }

    changeAffiliation(basketId:number):TiketGroupM{
        this._basketId=basketId;
        return this;
    }

}