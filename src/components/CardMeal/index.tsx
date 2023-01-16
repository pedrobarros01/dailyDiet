import { Container, COntainerIcon, Hour, Icon, Line, Title } from "./styles";
type Props ={
    hour: string;
    title: string;
    diet: boolean;
}

export function CardMeal({hour, title, diet}: Props){
    return(
        <Container>
            <Hour>{hour}</Hour>
            <Line />
            <Title
                numberOfLines={1}
            >
                {title}
            </Title>
            <COntainerIcon>
                <Icon name="circle" diet={diet}  />
            </COntainerIcon>
        </Container>
    );
}