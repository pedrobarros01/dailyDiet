import { Form } from "@components/Form";
import { Header } from "@components/Header";
import { Container } from "./styles";



export function Edit(){
    return(
        <Container>
            <Header title="Editar Refeição" />
            <Form type="EDIT" />
        </Container>
    );
}