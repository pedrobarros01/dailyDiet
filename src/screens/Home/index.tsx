import { BoxMeal, Container, Header, ImageLogo, ImageUser, Label } from "./styles";
import logo from "@assets/logo.png";
import user from "@assets/user.png";
import { StaticsOverview } from "@components/StaticsOverview";
import { Button } from "@components/Button";
import { FlatList, ScrollView, Text, View } from "react-native";
import { ListMeals } from "@components/ListMeals";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState, useEffect } from "react";
import { Meal, MealCollection } from "@storage/meal/mealDTO";
import { getDatesMeals } from "@storage/meal/getDatesMeals";
import { getMealsByDate } from "@storage/meal/getMealsByDate";
import { deleteMeals } from "@storage/meal/deleteMeal";
import { deleteAll } from "@storage/meal/delete";
import { delete2 } from "@storage/meal/delet2";
import { Input } from "@components/Input";
export function Home(){
    const navigation = useNavigation();
    const [listMeals, setListMeals] = useState<Meal[]>([]);
    const [data, setData] = useState("");
    function handleCreate(){
        navigation.navigate("Create");
    }
    async function handleSearch(){
        try {
            const list = await getMealsByDate(data);
            setListMeals(list)
            
        } catch (error) {
            console.error(error);
        }
    }
    return(
        <Container>
            <Header>
                <ImageLogo source={logo} />
                <ImageUser source={user} />
            </Header>
            <StaticsOverview />
            <BoxMeal>
                <Label>Refeições</Label>
                <Button
                    text="Nova refeição"
                    icon="plus"
                    onPress={handleCreate}
                />
                <Input label="Digite a data" onChangeText={setData} />
                <Button 
                    text="Pesquisar"
                    icon="search"
                    onPress={handleSearch}
                />
                
                <ListMeals date={data} list={listMeals} />
                
                
                
                
                
                
            </BoxMeal>
        </Container>
    );
}