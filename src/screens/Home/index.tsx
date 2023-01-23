import { BoxMeal, Container, Header, ImageLogo, ImageUser, Label } from "./styles";
import logo from "@assets/logo.png";
import user from "@assets/user.png";
import { StaticsOverview } from "@components/StaticsOverview";
import { Button } from "@components/Button";
import { Alert, FlatList, ScrollView, Text, View } from "react-native";
import { ListMeals } from "@components/ListMeals";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState, useEffect } from "react";
import { MealType, MealCollectionType } from "@storage/meal/mealDTO";
import { getMealsByDate } from "@storage/meal/getMealsByDate";
import { Input } from "@components/Input";
import { BackGroundType } from "@components/StaticsOverview/styles";
import { getPercent } from "@storage/overview/getPercent";
import { delete2 } from "@storage/meal/delet2";
import { getDatesMeals } from "@storage/meal/getDatesMeals";
import { deleteMeals } from "@storage/meal/deleteMeal";
import { deleteAll } from "@storage/meal/delete";
import { AppError } from "@utils/AppError";
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
            if(error instanceof AppError){
                Alert.alert("Pesquisa", error.message);
            }else{
                Alert.alert("Pesquisa", "Nao conseguimos pesquisar");
            }
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
            if(error instanceof AppError){
                Alert.alert("Porcentagem", error.message);
            }else{
                Alert.alert("Porcentagem", "Nao conseguimos calcular as estatiscas");
            }
        }
    }
    async function deletarTudo(){
        try{
            const dates = await getDatesMeals();
            for(const date of dates){
                await deleteAll(date);
            }
            delete2();
        }catch(error){
            console.log(error);
        }
    }
    useFocusEffect(useCallback(() => {
        //deletarTudo();
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