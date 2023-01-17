import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Select } from "@components/Select";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { SelectProps } from "@components/Select/styles";
import { Container, BoxForm, BoxDateTime, BoxSelects, Label, BoxSelect } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Form(){
    const [nome, setNome] = useState("");
    const [hora, setHora] = useState("");
    const [data, setData] = useState("");
    const [descricao, setDescricao] = useState("");
    const [select, setSelect] = useState<SelectProps>('VAZIO');
    const [selectProp, setSelectProp] = useState<boolean | null>(null);
    const navigation = useNavigation();

    function handleSelect(){
        const selectAux = !selectProp;
        setSelectProp(!selectProp);
        if(selectAux){
            setSelect('SIM');
        }else{
            setSelect('NAO');
        }

        
    }
    function handleCreate(){
        const obj = {
            nome,
            descricao,
            hora,
            data,
            dieta: select
        }
        console.log(obj);
        navigation.navigate("Home");
    }
    return(
        <Container> 
            
            <BoxForm>     
                <Input label="Nome"  onChangeText={setNome}/>
                <Input 
                label="Descrição" 
                multilinha 
                onChangeText={setDescricao} />
                <BoxDateTime>
                <Input 
                    label="Data" 
                    keyboardType="number-pad" 
                    date
                    onChangeText={setData}
                />
                <Input 
                    label="Hora"
                    keyboardType="number-pad" 
                    date
                    onChangeText={setHora}
                />
                </BoxDateTime>
                <BoxSelects>
                        <Label>Está dentro da dieta?</Label>
                        <BoxSelect>
                            <Select 
                                select={selectProp ? 'SIM' : 'VAZIO'}
                                icon="SIM" 
                                label="Sim"
                                onPress={handleSelect}
                            />
                            <Select 
                                select={!selectProp ? 'NAO' : 'VAZIO'} 
                                icon="NAO" 
                                label="Não"
                                onPress={handleSelect}
                            />
                        </BoxSelect>
                </BoxSelects>
            </BoxForm>
            <Button text="Cadastrar Refeição" onPress={handleCreate} />
        </Container>
    );
}