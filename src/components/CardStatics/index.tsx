import { HighLight } from "@components/HighLight";
import { MediaProps } from "@screens/Statics/styles";
import { CardProps, Container, SubTitle, Title } from "./styles";

type Props = {
    media?: MediaProps;
    type?: CardProps;
    title: number;
    subtitle: string;
}

export function CardStatics({media = 'ACIMA', type = 'INFO', title, subtitle} : Props){
    return(
        <Container media={media} type={type} >
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
        </Container>
    );
}