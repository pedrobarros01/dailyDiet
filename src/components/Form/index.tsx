import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Select } from "@components/Select";
import { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { SelectProps } from "@components/Select/styles";
import { Container, BoxForm, BoxDateTime, BoxSelects, Label, BoxSelect } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { MediaProps } from "@screens/Statics/styles";
import { MealType } from "@storage/meal/mealDTO";
import { postMeal } from "@storage/meal/postMeal";
import { putMeal } from "@storage/meal/putMeals";
import { AppError } from "@utils/AppError";
type FormType = 'CREATE' | 'EDIT';
type Props = {

    type?:FormType;
    meal?: MealType;
    date?: string;

}



export function Form({ type = 'CREATE', meal = {nome: '', descricao: '', dieta: false, hora: ''}, date = ''}: Props){
    const [nome, setNome] = useState(meal?.nome);
    const [hora, setHora] = useState(meal?.hora);
    const [data, setData] = useState(date);
    const [descricao, setDescricao] = useState(meal?.descricao);
    const [select, setSelect] = useState<SelectProps>(type === 'CREATE' ? 'VAZIO' : meal.dieta ? 'SIM' : 'NAO');
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
    async function handleForm(){
        if(type === 'CREATE'){
            const obj: MealType = {
                nome,
                descricao,
                hora,
                dieta: select === 'SIM' ? true : false
            }
            try{
                await postMeal(obj, data);
                const dieta: MediaProps = select === 'SIM' ?  'ACIMA' : 'ABAIXO'
                navigation.navigate("FeedBack", {dieta});
            }catch(error){
                if(error instanceof AppError){
                    Alert.alert("Formulario", error.message);
                }else{
                    Alert.alert("Formulario", "Nao conseguimos cadastrar refeição");
                }
            }
            
        }else{

                let diet: boolean = false;
                if(select === 'VAZIO'){
                    diet = meal?.dieta;
                }
                if(select === 'SIM'){
                    diet = true;
                }
                if(select === 'NAO'){
                    diet = false;
                }
                const obj: MealType = {
                    nome: meal?.nome,
                    descricao,
                    dieta: diet,
                    hora
                }
                try{
                    await putMeal(obj, date);
                    navigation.navigate("Meal", {date, name: meal.nome});
                }catch(error){
                    if(error instanceof AppError){
                        Alert.alert("Formulario", error.message);
                    }else{
                        Alert.alert("Formulario", "Nao conseguimos editar refeição");
                    }
                }
                

        }
    }
    return(
        <Container> 
            
            <BoxForm>     
                <Input 
                label="Nome"  
                value={nome}
                onChangeText={setNome}/>
                <Input 
                label="Descrição"
                value={descricao}
                multilinha 
                onChangeText={setDescricao} />
                <BoxDateTime>
                <Input 
                    label="Data" 
                    keyboardType="number-pad" 
                    date
                    value={data}
                    onChangeText={setData}
                />
                <Input 
                    label="Hora"
                    keyboardType="number-pad" 
                    date
                    value={hora}
                    onChangeText={setHora}
                />
                </BoxDateTime>
                <BoxSelects>
                        <Label>Está dentro da dieta?</Label>
                        <BoxSelect>
                            <Select 
                                select={select === 'SIM' ? 'SIM' : 'VAZIO'}
                                icon="SIM" 
                                label="Sim"
                                onPress={handleSelectSim}
                            />
                            <Select 
                                select={select === 'NAO' ? 'NAO' : 'VAZIO'} 
                                icon="NAO" 
                                label="Não"
                                onPress={handleSelectNao}
                            />
                        </BoxSelect>
                </BoxSelects>
            </BoxForm>
            <Button text={type === 'CREATE' ? "Cadastrar Refeição" : "Salvar Alterações"} onPress={handleForm} />
        </Container>
    );
}