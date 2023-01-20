import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { Meal, MealCollection } from "./mealDTO";

export async function getMealsByDate(date: string): Promise<Meal[] | []> {
    try{
        const storage = await AsyncStorage.getItem(`${MEAL_COLLECTION}-${date}`);
        
        const mealsByDate: Meal[] | []  = storage ? JSON.parse(storage) : [];
        return mealsByDate;
    }catch(error){
        throw error;
    }
}