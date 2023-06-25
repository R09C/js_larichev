export class PassageM{
    constructor(
        private _from:string,
        private _to:string,
        private _timefrom:Date,
        private _timeto:Date,
        private _count:number,
    ){}

    get from():string{
        return this._from; 
    }

    get to():string{
        return this._to; 
    }

    get timefrom():Date{
        return this._timefrom; 
    }

    get timeto():Date{
        return this._timeto; 
    }

    get count():number{
        return this. _count; 
    }

    changePassage(count:number):PassageM{
        this._count=count;
        return this;
    }
}