import { CardStatics } from "@components/CardStatics";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { getOverViewAllMeals } from "@storage/overview/getOverViewAllMeals";
import { getOverViewInsideMealDiet } from "@storage/overview/getOverViewInsideMealDiet";
import { getOverViewOutMealDiet } from "@storage/overview/getOverViewOutMealDiet";
import { getOverViewSequenceMealsInsideDiet } from "@storage/overview/getOverViewSequenceMealsInsideDiet";
import { Container, BoxStaticsGeneral, BoxHighLight, MediaProps, Title, BoxStatics, BoxMeals } from "./styles";
import {useState, useCallback} from "react";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";
type Props = {
    media: MediaProps;
}


export function Statics(){
    const routes = useRoute();
    const {media} = routes.params as Props;
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
            if(error instanceof AppError){
                Alert.alert("Estatisticas", error.message);
            }else{
                Alert.alert("Estatisticas", "Nao conseguimos encontrar a estatistica");
            }
        }
    }
    useFocusEffect(useCallback(() => {
        fetchStaticsGeneral();
    }, []))
    return(
        <Container media={media} >
            <Header />
            <BoxHighLight media={media}>
                <HighLight />
            </BoxHighLight>
            <BoxStaticsGeneral>
                <Title>Estat??sticas Gerais</Title>
                <BoxStatics>
                    <CardStatics 
                    type="INFO" 
                    title={sequenceMeal}
                    subtitle="melhor sequ??ncia de pratos dentro da dieta"
                    />
                    <CardStatics 
                    type="INFO" 
                    title={allMeal}
                    subtitle="refei????es registradas"
                    />
                    <BoxMeals>
                        <CardStatics  
                        type="MEDIA" 
                        media="ACIMA"  
                        title={insideMeal}
                        subtitle="refei????es dentro da dieta"
                        />
                        <CardStatics 
                        type="MEDIA" 
                        media="ABAIXO" 
                        title={outMeal}
                        subtitle="refei????es fora da dieta"
                        />
                    </BoxMeals>
                </BoxStatics>
            </BoxStaticsGeneral>
        </Container>

    );
}