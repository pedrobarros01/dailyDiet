import { Container, COntainerIcon, Hour, Icon, Line, Title } from "./styles";
type Props ={
    hour: string;
    title: string;
    diet: boolean;
    decricao: string;
    handleFunction: () => void;
}

export function CardMeal({hour, title, diet, handleFunction, decricao}: Props){
    return(
        <Container
        onPress={handleFunction}
        >
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