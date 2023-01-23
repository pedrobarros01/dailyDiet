import { Form } from "@components/Form";
import { Header } from "@components/Header";
import { useRoute } from "@react-navigation/native";
import { MealType } from "@storage/meal/mealDTO";
import { Container } from "./styles";

type Routes = {
    refeicao: MealType;
    date: string;
}

export function Edit(){
    const routes = useRoute();
    const {refeicao, date} = routes.params as Routes;
    return(
        <Container>
            <Header title="Editar Refeição" />
            <Form 
            type="EDIT" 
            meal={refeicao}
            date={date}
            />
        </Container>
    );
}