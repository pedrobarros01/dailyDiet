import { CardMeal } from "@components/CardMeal";
import { useNavigation } from "@react-navigation/native";
import { FlatList, ScrollView, Text } from "react-native";
import { BoxList, Container, Date } from "./styles";

export function ListMeals(){
    const array: string[] = ['10', '11', '12', '13', '14', '15', '16'];
    const navigation = useNavigation();
    function handleMeal(){
        navigation.navigate("Meal");
    }
    return(
        <Container>
            <Date>12.11.2022</Date>
                <FlatList
                    contentContainerStyle={{flex: 1}}
                    data={array}
                    keyExtractor={(item) => item}
                    renderItem={({item}) => <CardMeal hour="20:00" title="aslasnajsbhadasdjadjadgjadgsdasdasd" diet 
                    handleFunction={handleMeal}
                    />}
                />            
        </Container>
    );
}