import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";


export async function delete2(){
    try {
        await AsyncStorage.removeItem(`${MEAL_COLLECTION}`);
    } catch (error) {
        throw error;
    }
}