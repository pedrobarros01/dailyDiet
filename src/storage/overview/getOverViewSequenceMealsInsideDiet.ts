import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDatesMeals } from "@storage/meal/getDatesMeals";
import { getMealsByDate } from "@storage/meal/getMealsByDate";


export async function getOverViewSequenceMealsInsideDiet(): Promise<number>{
    try{
        const dates = await getDatesMeals();
        let i = 0;
        let lock = true;
        let lock2 = true;
        const arrayMaxSequence: number[] = []
        for(const date of dates){
            const mealsInDate = await getMealsByDate(date);
            for(const meal of mealsInDate){
                if(meal.dieta){
                    i++;
                }else{
                    lock2 = false;
                }
                if(!lock2){
                    arrayMaxSequence.push(i);
                    break;
                }
            }


        }
        let maior = arrayMaxSequence[0];
        for(let j = 1; j < arrayMaxSequence.length; j++){
            if(maior < arrayMaxSequence[j]){
                maior = arrayMaxSequence[j];
            }
        }

        return maior;
    }catch(error){
        throw error;
    }
}