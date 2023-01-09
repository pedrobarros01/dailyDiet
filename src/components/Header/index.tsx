import { HighLight } from "@components/HighLight";
import { Container, IconBack, Title, ButtonIcon, BoxIcon, BoxTitle } from "./styles";

type Props = {
    title?: string;
}

export function Header({title = ''}: Props){
    return(
        <Container>       
            <ButtonIcon onPress={() => console.log("Aoba")}>
                    <IconBack name="arrowleft" />
            </ButtonIcon>

            <BoxTitle>
                {
                    title !== '' ? <Title>Nova Refeição</Title> : null
                }
                
            </BoxTitle>

        </Container>
    );
}