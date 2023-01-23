import { AppError } from "./AppError";

export class HourFormat{
    private hour: string;
    constructor(hour: string){
        this.hour = hour;
    }
    public construirHora(){
        if(this.hour.length !== 4){
            throw new AppError("Hora só pode ter 4 digitos");
        }
        let strHour = "";
        for(let i = 0; i < this.hour.length; i++){
            if(i == 2){
                strHour  += ":";
            }
            strHour += this.hour[i];
        }
        return strHour;
    }
}