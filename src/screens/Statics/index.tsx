import { CardStatics } from "@components/CardStatics";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Container, BoxStaticsGeneral, BoxHighLight, MediaProps, Title, BoxStatics, BoxMeals } from "./styles";

type Props = {
    media?: MediaProps;
}


export function Statics({media = 'ACIMA'} : Props){
    return(
        <Container media={media} >
            <Header />
            <BoxHighLight>
                <HighLight />
            </BoxHighLight>
            <BoxStaticsGeneral>
                <Title>Estatísticas Gerais</Title>
                <BoxStatics>
                    <CardStatics />
                    <CardStatics />
                    <BoxMeals>
                        <CardStatics />
                        <CardStatics />
                    </BoxMeals>
                </BoxStatics>
            </BoxStaticsGeneral>
        </Container>

    );
}