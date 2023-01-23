import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { getMealsByDate } from "./getMealsByDate";

export async function getMeal(date: string, nameMeal: string){
    try{
        const mealsByDate = await getMealsByDate(date);
        const meal = mealsByDate.find(x => x.nome === nameMeal);
        if(meal === undefined){
            throw new AppError("Não conseguimos encontrar a refeição!");
        }
        return meal;
    }catch(error){
        throw error;
    }
}
