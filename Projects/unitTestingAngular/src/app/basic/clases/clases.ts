export class player{
    hp!:number

    constructor(){
        this.hp = 100
    }
    recibirDanio(danio:number){
        if(danio > this.hp){
            return 0
        }else{
            return this.hp - danio
        }
    }
}

