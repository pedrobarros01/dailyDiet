import { CardMeal } from "@components/CardMeal";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getMealsByDate } from "@storage/meal/getMealsByDate";
import { Meal, MealCollection } from "@storage/meal/mealDTO";
import { useCallback, useEffect, useState } from "react";
import { FlatList, ScrollView, Text } from "react-native";
import { BoxList, Container, Date } from "./styles";

type Props = {
    list: Meal[];
    date: string;
}

export function ListMeals({list, date}:Props){
    const navigation = useNavigation();
    function handleMeal(){
        console.log("aaaaaaaaaaaaaaaaaaaa");
        navigation.navigate("Meal");
        
    }
    /* async function fetchListMeals(){
        try {
            const list = await getMealsByDate(meadate);
            console.log(list);
            setListCardMeals(list);

        } catch (error) {
            console.error(error);
        }
    }
     */
    return(
        <Container>
            <Date>{date}</Date>
            <FlatList 
                    contentContainerStyle={{width:"90%",alignItems: "center" }} 
                    data={list}
                    
                    keyExtractor={(item) => item.nome}
                    renderItem={({item}) => <CardMeal 
                    hour={item.hora} 
                    title={item.nome} 
                    diet={item.dieta}
                    decricao={item.descricao}
                    handleFunction={handleMeal}
                    />} 
                    
            />
                 
                          
        </Container>
    );
}