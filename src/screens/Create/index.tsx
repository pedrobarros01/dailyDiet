import { Form } from "@components/Form";
import { Header } from "@components/Header";
import { Container } from "./styles";

export function Create(){
    return(
        <Container>
            <Header title="Nova Refeição" />
            <Form  />
        </Container>
    );
}