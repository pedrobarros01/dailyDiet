import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDatesMeals } from "@storage/meal/getDatesMeals";
import { getMealsByDate } from "@storage/meal/getMealsByDate";


export async function getOverViewOutMealDiet(): Promise<number>{
    try{
        const dates = await getDatesMeals();
        let i = 0;
        for(const date of dates){
            const mealsInDate = await getMealsByDate(date);
            for(const meal of mealsInDate){
                if(!meal.dieta){
                    i++;
                }
            }
        }
        return i;
    }catch(error){
        throw error;
    }
}