import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { getMealsByDate } from "./getMealsByDate";
import { MealType } from "./mealDTO";


export async function deleteMeals(date: string, meal:MealType){
    try{
        const storedMealsByDate = await getMealsByDate(date);
        const newMealsByDate = storedMealsByDate.filter(item => item.nome !== meal.nome);
        const storageMealsByDate = JSON.stringify(newMealsByDate);
        
        await AsyncStorage.setItem(`${MEAL_COLLECTION}-${date}`, storageMealsByDate); 

    }catch(error){
        throw error;
    }
}