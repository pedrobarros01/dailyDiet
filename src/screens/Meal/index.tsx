import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { ModalMeal } from "@components/ModalMeal";
import { MediaProps } from "@screens/Statics/styles";
import { useState } from "react";
import { Container, BoxButton, Box, BoxTitleAndSubTitle, DateTime, DateTimeTitle, DescMeal, NameMeal, ChipCard, Icon, TitleChip } from "./styles";
type Props = {
    media?: MediaProps;
}
export function Meal({media = 'ACIMA'}: Props){
    const [mostrar, setMostrar] = useState(false)
    function handleExcluir(){
        setMostrar(true);
    }
    function handleEditar(){
        console.log("Alou");
    }
    return(
        <Container media={media} >
            <Header title="Refeição" />
            <Box>
                <BoxTitleAndSubTitle>
                    <NameMeal>Sanduiche</NameMeal>
                    <DescMeal>Sanduíche de pão integral com atum e salada de alface e tomate</DescMeal>
                    <DateTimeTitle>Data e Hora</DateTimeTitle>
                    <DateTime>12/08/2022 às 16:00</DateTime>
                    <ChipCard>
                        <Icon name="circle" media={media} />
                        {
                            media === 'ACIMA' ?(
                                <TitleChip>Dentro da dieta</TitleChip> 
                            ) : 
                            (
                                <TitleChip>Fora da dieta</TitleChip>
                            )
                        }
                    </ChipCard>
                </BoxTitleAndSubTitle>
                <BoxButton>
                    <Button 
                        type="SOLID" 
                        icon="edit-2" 
                        text="Editar refeição"
                        onPress={handleEditar}

                    />
                    <Button  
                        type="OUTLINED" 
                        icon="trash-2" 
                        text="Excluir refeição" 
                        onPress={handleExcluir}
                    />
                    

                </BoxButton>
            </Box>
            <ModalMeal mostrar={mostrar} />
        </Container>
    );
}