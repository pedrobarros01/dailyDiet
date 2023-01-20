import AsyncStorage from "@react-native-async-storage/async-storage";
import { getOverViewAllMeals } from "./getOverViewAllMeals";
import { getOverViewInsideMealDiet } from "./getOverViewInsideMealDiet";


export async function getPercent(){
    try{
        const inside = await getOverViewInsideMealDiet();
        const total = await getOverViewAllMeals();
        const result = (inside / total) * 100;
        return parseFloat( result.toFixed(2));
    }catch(error){
        throw error;
    }
}