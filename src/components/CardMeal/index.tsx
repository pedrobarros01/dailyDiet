import { Container, COntainerIcon, Hour, Icon, Line, Title } from "./styles";


export function CardMeal(){
    return(
        <Container>
            <Hour>20:00</Hour>
            <Line />
            <Title
                numberOfLines={1}
            >
                ahgajsdfggkjdhsgfsdgjkjdsgfdsaghhgchgchchchchchchgcjgvghjvjhvvjjhvjvjvjhvjhvvhghghgvhgghgghs
            </Title>
            <COntainerIcon>
                <Icon name="circle"  />
            </COntainerIcon>
        </Container>
    );
}