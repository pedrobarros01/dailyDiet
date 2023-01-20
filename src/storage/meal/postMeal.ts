import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { getMealsByDate } from "./getMealsByDate";
import { Meal, MealCollection } from "./mealDTO";
import { postDatesMeals } from "./postDatesMeals";


export async function postMeal(meal: Meal, date: string){

    try{
        await postDatesMeals(date);
        const storedMealByDate = await getMealsByDate(date);
        
        const findNameMeal = storedMealByDate.find(item => item.nome === meal.nome);
        if(findNameMeal){
            throw new AppError('Nomes iguais não podem');
        }
        const list = [...storedMealByDate, meal ];
        console.log(date)
        console.log(list);

        const storage = JSON.stringify(list);
        console.log("stringfy");
        console.log(storage);
        await AsyncStorage.setItem(`${MEAL_COLLECTION}-${date}`,storage);

    }catch(error){
        throw error;
    }

}