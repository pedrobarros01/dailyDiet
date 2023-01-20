import { getPercent } from "@storage/overview/getPercent";
import { Container, SubTitle, Title } from "./styles";
import {useState, useCallback} from "react";
import { useFocusEffect } from "@react-navigation/native";
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