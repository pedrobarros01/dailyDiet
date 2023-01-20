import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { getMealsByDate } from "./getMealsByDate";
import { Meal } from "./mealDTO";


export async function deleteMeals(date: string, meal:Meal){
    try{
        const storedMealsByDate = await getMealsByDate(date);
        const newMealsByDate = storedMealsByDate.filter(item => item.nome !== meal.nome);
        const storageMealsByDate = JSON.stringify(newMealsByDate);
        await AsyncStorage.removeItem(`${MEAL_COLLECTION}-${date}`);
        /* await AsyncStorage.setItem(`${MEAL_COLLECTION}-${date}`, storageMealsByDate); */

    }catch(error){
        throw error;
    }
}