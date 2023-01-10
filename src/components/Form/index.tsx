import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Select } from "@components/Select";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";

import { Container, BoxForm, BoxDateTime, BoxSelects, Label, BoxSelect } from "./styles";

export function Form(){
    return(
        <Container> 
            
            <BoxForm>     
                <Input label="Nome" />
                <Input label="Descrição" multilinha />
                <BoxDateTime>
                <Input 
                    label="Data" 
                    keyboardType="number-pad" 
                    date
                />
                <Input 
                    label="Hora"
                    keyboardType="number-pad" 
                    date
                />
                </BoxDateTime>
                    <BoxSelects>
                        <Label>Está dentro da dieta?</Label>
                        <BoxSelect>
                            <Select 
                                select="VAZIO" 
                                icon="SIM" 
                                label="Sim"
                            />
                            <Select 
                                select="VAZIO" 
                                icon="NAO" 
                                label="Não"
                            />
                        </BoxSelect>
                </BoxSelects>
            </BoxForm>
            
            <Button text="Cadastrar Refeição" />
        </Container>
    );
}