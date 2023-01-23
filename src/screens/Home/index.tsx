import { BoxMeal, Container, Header, ImageLogo, ImageUser, Label } from "./styles";
import logo from "@assets/logo.png";
import user from "@assets/user.png";
import { StaticsOverview } from "@components/StaticsOverview";
import { Button } from "@components/Button";
import { FlatList, ScrollView, Text, View } from "react-native";
import { ListMeals } from "@components/ListMeals";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState, useEffect } from "react";
import { MealType, MealCollectionType } from "@storage/meal/mealDTO";
import { getMealsByDate } from "@storage/meal/getMealsByDate";
import { Input } from "@components/Input";
import { BackGroundType } from "@components/StaticsOverview/styles";
import { getPercent } from "@storage/overview/getPercent";
export function Home(){
    const navigation = useNavigation();
    const [listMeals, setListMeals] = useState<MealType[]>([]);
    const [data, setData] = useState("");
    const [type, setType] = useState<BackGroundType>("PRIMARY");
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
    async function fetchPercent(){
        try{
            const percent = await getPercent();
            if(percent >= 50){
                setType("PRIMARY");
            }else{
                setType("SECONDARY");
            }
        }catch(error){
            console.error(error);
        }
    }
    useFocusEffect(useCallback(() => {
        fetchPercent();
    }, []))
    return(
        <Container>
            <Header>
                <ImageLogo source={logo} />
                <ImageUser source={user} />
            </Header>
            <StaticsOverview type={type} />
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