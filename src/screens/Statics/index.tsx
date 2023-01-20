import { CardStatics } from "@components/CardStatics";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { getOverViewAllMeals } from "@storage/overview/getOverViewAllMeals";
import { getOverViewInsideMealDiet } from "@storage/overview/getOverViewInsideMealDiet";
import { getOverViewOutMealDiet } from "@storage/overview/getOverViewOutMealDiet";
import { getOverViewSequenceMealsInsideDiet } from "@storage/overview/getOverViewSequenceMealsInsideDiet";
import { Container, BoxStaticsGeneral, BoxHighLight, MediaProps, Title, BoxStatics, BoxMeals } from "./styles";
import {useState, useCallback} from "react";
import { useFocusEffect } from "@react-navigation/native";
type Props = {
    media?: MediaProps;
}


export function Statics({media = 'ACIMA'} : Props){
    const [insideMeal, setInsideMeal] = useState<number>(0);
    const [outMeal, setOutMeal] = useState<number>(0);
    const [allMeal, setAllMeal] = useState<number>(0);
    const [sequenceMeal, setSequenceMeal] = useState<number>(0);
    async function fetchStaticsGeneral(){
        try{
            const inside = await getOverViewInsideMealDiet();
            const out = await getOverViewOutMealDiet();
            const all = await getOverViewAllMeals();
            const sequence = await getOverViewSequenceMealsInsideDiet();
            setInsideMeal(inside);
            setAllMeal(all);
            setOutMeal(out);
            setSequenceMeal(sequence);
        }catch(error){
            console.error(error);
        }
    }
    useFocusEffect(useCallback(() => {
        fetchStaticsGeneral();
    }, []))
    return(
        <Container media={media} >
            <Header />
            <BoxHighLight>
                <HighLight />
            </BoxHighLight>
            <BoxStaticsGeneral>
                <Title>Estatísticas Gerais</Title>
                <BoxStatics>
                    <CardStatics 
                    type="INFO" 
                    title={sequenceMeal}
                    subtitle="melhor sequência de pratos dentro da dieta"
                    />
                    <CardStatics 
                    type="INFO" 
                    title={allMeal}
                    subtitle="refeições registradas"
                    />
                    <BoxMeals>
                        <CardStatics  
                        type="MEDIA" 
                        media="ACIMA"  
                        title={insideMeal}
                        subtitle="refeições dentro da dieta"
                        />
                        <CardStatics 
                        type="MEDIA" 
                        media="ABAIXO" 
                        title={outMeal}
                        subtitle="refeições fora da dieta"
                        />
                    </BoxMeals>
                </BoxStatics>
            </BoxStaticsGeneral>
        </Container>

    );
}