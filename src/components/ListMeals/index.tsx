import { CardMeal } from "@components/CardMeal";
import { Text } from "react-native";
import { Container, Date } from "./styles";

export function ListMeals(){
    const array: string[] = ['100', '11', '12', '14' ,'15', '16', '17', '18', '19'];

    return(
        <Container>
            <Date>12.11.2022</Date>
            {
                array.map(() => <CardMeal />)
            }
        </Container>
    );
}