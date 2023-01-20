import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDatesMeals } from "@storage/meal/getDatesMeals";
import { getMealsByDate } from "@storage/meal/getMealsByDate";


export async function getOverViewSequenceMealsInsideDiet(): Promise<number>{
    try{
        const dates = await getDatesMeals();
        let i = 0;
        let lock = true;
        for(const date of dates){
            const mealsInDate = await getMealsByDate(date);
            if(lock){
                for(const meal of mealsInDate){
                    if(meal.dieta){
                        i++;
                    }else{
                        lock = true
                    }
                    if(lock){
                        break;
                    }
                }

            }else{
                break;
            }

        }
        return i;
    }catch(error){
        throw error;
    }
}