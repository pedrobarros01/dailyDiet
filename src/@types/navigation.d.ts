import { MediaProps } from "@screens/Statics/styles";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Home: undefined;
            Meal: undefined;
            Statics: {
                media: MediaProps
            };
            Edit: undefined;
            FeedBack: {
                dieta: MediaProps
            };
            Create: undefined;
        }
    }
}