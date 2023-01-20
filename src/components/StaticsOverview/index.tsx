import { HighLight } from "@components/HighLight";
import { Container, Icon, ContainerIcon, BackGroundType } from "./styles";
import { useNavigation} from "@react-navigation/native";
import { MediaProps } from "@screens/Statics/styles";
import {useState} from "react";
type Props = {
    type?: BackGroundType;

}

export function StaticsOverview({type = 'PRIMARY'} : Props){
    const navigation = useNavigation();
    const [percent, setPercent] = useState<number>(0);
    function handleStatics(){
        
        const media: MediaProps = percent >= 50 ? 'ACIMA' : 'ABAIXO';
        
        navigation.navigate("Statics", {media});
    }
    return(
        <Container type={type} onPress={handleStatics} >
            <ContainerIcon>
                <Icon type={type} />
            </ContainerIcon>
            <HighLight setPercent={setPercent} />
        </Container>
    );
}