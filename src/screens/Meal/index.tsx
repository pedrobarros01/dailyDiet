import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Container, BoxButton, Box, BoxTitleAndSubTitle, DateTime, DateTimeTitle, DescMeal, NameMeal } from "./styles";


export function Meal(){
    return(
        <Container>
            <Header title="Refeição" />
            <Box>
                <BoxTitleAndSubTitle>
                    <NameMeal>Sanduiche</NameMeal>
                    <DescMeal>Sanduíche de pão integral com atum e salada de alface e tomate</DescMeal>
                    <DateTimeTitle>Data e Hora</DateTimeTitle>
                    <DateTime>12/08/2022 às 16:00</DateTime>
                </BoxTitleAndSubTitle>
                <BoxButton>
                    <Button 
                        type="SOLID" 
                        icon="edit-2" 
                        text="Editar refeição"  
                    />
                    <Button  
                        type="OUTLINED" 
                        icon="trash-2" 
                        text="Excluir refeição" 
                    />


                </BoxButton>
            </Box>
        </Container>
    );
}