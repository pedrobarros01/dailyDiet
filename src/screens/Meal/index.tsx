import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { ModalMeal } from "@components/ModalMeal";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { MediaProps } from "@screens/Statics/styles";
import { deleteMeals } from "@storage/meal/deleteMeal";
import { getMeal } from "@storage/meal/getMeal";
import { MealType } from "@storage/meal/mealDTO";
import { useState, useCallback } from "react";
import { Container, BoxButton, Box, BoxTitleAndSubTitle, DateTime, DateTimeTitle, DescMeal, NameMeal, ChipCard, Icon, TitleChip } from "./styles";
type Props = {
    media?: MediaProps;
}
type Route = {
    name: string;
    date: string;
}
export function Meal({media = 'ACIMA'}: Props){
    const routes = useRoute();
    const {name, date} = routes.params as Route;
    const [mostrar, setMostrar] = useState(false)
    const [refeicao, setRefeicao] = useState<MealType>({
        nome: '',
        descricao: '',
        dieta: false,
        hora: ''
    });
    const navigation = useNavigation();
    async function deletarRefeicao(){
        try{
            await deleteMeals(date, refeicao);
            navigation.navigate("Home");
        }catch(error){
            throw error;
        }
    }
    function handleExcluir(){
        setMostrar(true);
        
    }
    function handleEditar(){
        
        navigation.navigate("Edit", {refeicao, date});
    }
    async function fetchMeal(date: string, nameMeal:string){
        try{
            const meal = await getMeal(date, nameMeal);
            setRefeicao(meal);
        }catch(error){
            console.error(error);
        }
    }
    useFocusEffect(useCallback(() => {
        fetchMeal(date, name);
    }, []))
    return(
        <Container media={refeicao.dieta ? 'ACIMA' : 'ABAIXO'} >
            <Header title="Refeição" />
            <Box>
                <BoxTitleAndSubTitle>
                    <NameMeal>{refeicao.nome}</NameMeal>
                    <DescMeal>{refeicao.descricao}</DescMeal>
                    <DateTimeTitle>Data e Hora</DateTimeTitle>
                    <DateTime>{date} às {refeicao.hora}</DateTime>
                    <ChipCard>
                        <Icon name="circle" media={refeicao.dieta ? 'ACIMA' : 'ABAIXO'}/>
                        {
                            refeicao.dieta ? (
                                <TitleChip>Dentro da dieta</TitleChip> 
                            ) : 
                            (
                                <TitleChip>Fora da dieta</TitleChip>
                            )
                        }
                    </ChipCard>
                </BoxTitleAndSubTitle>
                <BoxButton>
                    <Button 
                        type="SOLID" 
                        icon="edit-2" 
                        text="Editar refeição"
                        onPress={handleEditar}

                    />
                    <Button  
                        type="OUTLINED" 
                        icon="trash-2" 
                        text="Excluir refeição" 
                        onPress={handleExcluir}
                    />
                    

                </BoxButton>
            </Box>
            <ModalMeal mostrar={mostrar} setMostrar={setMostrar} deletarRefeicao={deletarRefeicao} />
        </Container>
    );
}