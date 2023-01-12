import { models } from "./models.js"

export class ModeloPieza {

    constructor(numero){
        this.modelo = numero
        this.angulo = 0
        this.matriz = models[this.modelo].matriz[this.angulo]
        this.x = 1
        this.y = 1
        this.longitud = this.matriz[0].length
        this.altura = this.matriz.length

    }
    girar = ()=>{
        if(this.angulo<=3){
            this.angulo = this.angulo +1
        }
        if(this.angulo>3){
            this.angulo = 0
        }
        this.matriz = models[this.modelo].matriz[this.angulo]
        this.longitud = this.matriz[0].length
        this.altura = this.matriz.length
        console.log(this.angulo);
    }
}