import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { DataFormat } from "@utils/DataFormat";
import { getDatesMeals } from "./getDatesMeals";


export async function postDatesMeals(date: string){
    try{
        const dataFormat = new DataFormat(date);
        const data = dataFormat.construirData();
        const storedDatesMeals = await getDatesMeals();
        const exist = storedDatesMeals.includes(data);
        console.log("existe: "+exist);
        if(!exist){
            const list = [...storedDatesMeals, data];
            const storageDatesMeals = JSON.stringify(list);
            await AsyncStorage.setItem(MEAL_COLLECTION, storageDatesMeals);
        }

    }catch(error){
        throw error;
    }
}