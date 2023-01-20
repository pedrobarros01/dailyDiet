 import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";


export async function deleteAll(date: string){
    try {
        await AsyncStorage.removeItem(`${MEAL_COLLECTION}-${date}`);
    } catch (error) {
        throw error;
    }
}