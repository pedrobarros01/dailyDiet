import { Container, Box, BoxInfo, ImageInfo, SubTitle, Title, Strong } from "./styles";
import Dentro from "@assets/IllustrationDentro.png";
import Fora from "@assets/IllustrationFora.png";
import { Button } from "@components/Button";
import { MediaProps } from "@screens/Statics/styles";
import { useNavigation, useRoute } from "@react-navigation/native";
type Props = {
    dieta: MediaProps;
}
export function FeedBack(){
    const navigation = useNavigation();
    const route = useRoute();
    const { dieta } = route.params as Props;
    function handleHome(){
        navigation.navigate("Home");
    }
    return(
        <Container>
            <Box>
                <BoxInfo>
                    <Title dieta={dieta} >{dieta === 'ACIMA' ? 'Continue Assim!' : 'Que pena!'}</Title>
                    {
                        dieta === 'ACIMA' ? 
                        (
                            <SubTitle>
                                Você continua <Strong>dentro da dieta</Strong>.Muito Bem!
                            </SubTitle>
                        ) : 
                        (
                            <SubTitle>
                                Você <Strong>saiu da dieta</Strong> dessa vez, mas continue se esforçando e não desista!
                            </SubTitle>
                        )
                    }
                </BoxInfo>
                <ImageInfo source={dieta === 'ACIMA' ? Dentro : Fora}/>
                <Button text="Ir para pagina inicial" onPress={handleHome} />
            </Box>
            
        </Container>
    );
}