import { HighLight } from "@components/HighLight";
import { Container, Icon, ContainerIcon, BackGroundType } from "./styles";
import { useNavigation} from "@react-navigation/native";

type Props = {
    type?: BackGroundType;
}

export function StaticsOverview({type = 'PRIMARY'} : Props){
    const navigation = useNavigation();
    function handleStatics(){
        navigation.navigate("Statics");
    }
    return(
        <Container type={type} onPress={handleStatics} >
            <ContainerIcon>
                <Icon type={type} />
            </ContainerIcon>
            <HighLight />
        </Container>
    );
}