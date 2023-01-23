import { MediaProps } from "@screens/Statics/styles";
import { MealType } from "@storage/meal/mealDTO";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Home: undefined;
            Meal: {
                name: string;
                date: string;
            };
            Statics: {
                media: MediaProps;
                
            };
            Edit: {
                refeicao: MealType
                date: string;
            };
            FeedBack: {
                dieta: MediaProps
            };
            Create: undefined;
        }
    }
}