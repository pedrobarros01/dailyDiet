import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDatesMeals } from "@storage/meal/getDatesMeals";
import { getMealsByDate } from "@storage/meal/getMealsByDate";


export async function getOverViewAllMeals(): Promise<number>{
    try{
        const dates = await getDatesMeals();
        let soma = 0
        for(const date of dates){
            const mealsInDate = await getMealsByDate(date);
            soma += mealsInDate.length;
        }
        return soma;
    }catch(error){
        throw error;
    }
}