import { HighLight } from "@components/HighLight";
import { useNavigation } from "@react-navigation/native";
import { Container, IconBack, Title, ButtonIcon, BoxIcon, BoxTitle } from "./styles";

type Props = {
    title?: string;
}

export function Header({title = ''}: Props){
    const navigation = useNavigation();
    function handleGoBack(){
        navigation.goBack();
    }
    return(
        <Container>       
            <ButtonIcon onPress={handleGoBack}>
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