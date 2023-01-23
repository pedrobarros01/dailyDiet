import { AppError } from "./AppError";

 export class DataFormat{
    private date: string;
    constructor(date: string){
        this.date = date;
    }
    public construirData(){
        if(this.date.length !== 8){
            throw new AppError("Campo data precisa ter 8 digitos(ddmmyyyy)");
        }
        let strDate = "";
        for(let i = 0; i < this.date.length ; i++){
            if(i == 2 || i == 4){
                strDate += "/";
            }
            strDate += this.date[i];
        }
        return strDate;
    }

}