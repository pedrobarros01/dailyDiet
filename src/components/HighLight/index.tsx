import { getPercent } from "@storage/overview/getPercent";
import { Container, SubTitle, Title } from "./styles";
import {useState, useCallback} from "react";
import { useFocusEffect } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";
type Props = {
    setPercent?: Function
}
export function HighLight({setPercent = undefined}: Props){
    const [percents, setPercents] = useState<number>();
    async function fetchPercent(){
        try{
            const percent = await getPercent();
            setPercents(percent);
            if(setPercent !== undefined){
                setPercent(percent);
            }
        }catch(error){
            if(error instanceof AppError){
                Alert.alert("Porcentagem", error.message);
            }else{
                Alert.alert("Porcentagem", "Nao conseguimos calcular as estatiscas");
            }
            console.log(error);
        }
    }
    useFocusEffect(useCallback(() =>{
        fetchPercent();
    }, []))
    return(
        <Container>
            <Title>
                {percents}%
            </Title>
            <SubTitle>
                das refeições dentro da dieta
            </SubTitle>
        </Container>
    );
}