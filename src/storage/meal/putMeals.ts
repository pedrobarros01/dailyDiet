import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { getDatesMeals } from "./getDatesMeals";
import { getMealsByDate } from "./getMealsByDate";
import { MealType } from "./mealDTO";

export async function putMeal(meal: MealType, date: string){
    try{
        const storedMealByDate = await getMealsByDate(date);
        storedMealByDate.map((item) => {
            if(meal.nome === item.nome){
                item.descricao = meal.descricao;
                item.dieta = meal.dieta;
                item.hora = item.hora;
                return item;
            }
        });
        const storageMealByDate = JSON.stringify(storedMealByDate);
        await AsyncStorage.setItem(`${MEAL_COLLECTION}-${date}`, storageMealByDate);
    }catch(error){
        throw error;
    }
}