import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Container, BoxStaticsGeneral, BoxHighLight } from "./styles";


export function Statics(){
    return(
        <Container>
            <Header />
            <BoxHighLight>
                <HighLight />
            </BoxHighLight>
            <BoxStaticsGeneral>

            </BoxStaticsGeneral>
        </Container>

    );
}