import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealType, MealCollectionType } from "./mealDTO";

export async function getMealsByDate(date: string): Promise<MealType[] | []> {
    try{
        const storage = await AsyncStorage.getItem(`${MEAL_COLLECTION}-${date}`);
        
        const mealsByDate: MealType[] | []  = storage ? JSON.parse(storage) : [];
        return mealsByDate;
    }catch(error){
        throw error;
    }
}