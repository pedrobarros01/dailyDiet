import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Create } from "@screens/Create";
import { Edit } from "@screens/Edit";
import { FeedBack } from "@screens/Feedback";
import { Home } from "@screens/Home";
import { Meal } from "@screens/Meal";
import { Statics } from "@screens/Statics";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator
            screenOptions={{headerShown: false}}
        >
            <Screen 
                name="Home"
                component={Home}
            />
            <Screen 
                name="FeedBack"
                component={FeedBack}
            />
            <Screen 
                name="Create"
                component={Create}
            />
            <Screen 
                name="Meal"
                component={Meal}
            />
            <Screen 
                name="Edit"
                component={Edit}
            />
            <Screen 
                name="Statics"
                component={Statics}
            />

        </Navigator>

    );
}