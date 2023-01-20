import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Select } from "@components/Select";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { SelectProps } from "@components/Select/styles";
import { Container, BoxForm, BoxDateTime, BoxSelects, Label, BoxSelect } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { MediaProps } from "@screens/Statics/styles";
import { Meal } from "@storage/meal/mealDTO";
import { postMeal } from "@storage/meal/postMeal";
type FormType = 'CREATE' | 'EDIT';
type Props = {

    type?:FormType;

}


export function Form({ type = 'CREATE'}: Props){
    const [nome, setNome] = useState("");
    const [hora, setHora] = useState("");
    const [data, setData] = useState("");
    const [descricao, setDescricao] = useState("");
    const [select, setSelect] = useState<SelectProps>('VAZIO');
    const [checkselect, setCheckSelect] = useState<boolean | null>(null);
    const navigation = useNavigation();

    function handleSelectSim(){
        setSelect("SIM");
        setCheckSelect(true);
    }
    function handleSelectNao(){
        setSelect("NAO");
        setCheckSelect(false);
    }
    async function handleCreate(){
        const obj: Meal = {
            nome,
            descricao,
            hora,
            dieta: select === 'SIM' ? true : false
        }
        await postMeal(obj, data);
        const dieta: MediaProps = select === 'SIM' ?  'ACIMA' : 'ABAIXO'
        navigation.navigate("FeedBack", {dieta});
    }
    function handleEdit(){
        navigation.navigate("Meal");
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
                                select={checkselect ? 'SIM' : 'VAZIO'}
                                icon="SIM" 
                                label="Sim"
                                onPress={handleSelectSim}
                            />
                            <Select 
                                select={!checkselect && checkselect !== null ? 'NAO' : 'VAZIO'} 
                                icon="NAO" 
                                label="Não"
                                onPress={handleSelectNao}
                            />
                        </BoxSelect>
                </BoxSelects>
            </BoxForm>
            <Button text={type === 'CREATE' ? "Cadastrar Refeição" : "Salvar Alterações"} onPress={handleCreate} />
        </Container>
    );
}