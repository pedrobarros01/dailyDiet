import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { getDatesMeals } from "./getDatesMeals";


export async function postDatesMeals(date: string){
    try{
        const storedDatesMeals = await getDatesMeals();
        const exist = storedDatesMeals.includes(date);
        console.log("existe: "+exist);
        if(!exist){
            const list = [...storedDatesMeals, date];
            const storageDatesMeals = JSON.stringify(list);
            await AsyncStorage.setItem(MEAL_COLLECTION, storageDatesMeals);
        }

    }catch(error){
        throw error;
    }
}