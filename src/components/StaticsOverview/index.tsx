import { HighLight } from "@components/HighLight";
import { Container, Icon, ContainerIcon, BackGroundType } from "./styles";

type Props = {
    type?: BackGroundType;
}

export function StaticsOverview({type = 'PRIMARY'} : Props){
    return(
        <Container type={type} >
            <ContainerIcon>
                <Icon type={type} />
            </ContainerIcon>
            <HighLight />
        </Container>
    );
}