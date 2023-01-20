import { Form } from "@components/Form";
import { Header } from "@components/Header";
import { useFocusEffect } from "@react-navigation/native";
import { Meal } from "@storage/meal/mealDTO";
import { postMeal } from "@storage/meal/postMeal";
import { useState, useCallback } from "react";
import { Container } from "./styles";

export function Create(){
    
    return(
        <Container>
            <Header title="Nova Refeição" />
            <Form  />
        </Container>
    );
}