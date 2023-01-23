import { Button } from "@components/Button";
import { Modal } from "react-native";
import { ModalCenteredView, BoxButtons, LabelModal, ModalView } from "./styles";
type Props = {
    mostrar:boolean;
    setMostrar: React.Dispatch<React.SetStateAction<boolean>>;
    deletarRefeicao: Function
}

export function ModalMeal({mostrar, setMostrar, deletarRefeicao}:Props){
    function handleCancelar(){
        setMostrar(false);
    }
    function handleExcluir(){
        deletarRefeicao();
        console.log("Alou");
    }
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={mostrar}
        >
                <ModalCenteredView>
                    <ModalView>
                        <LabelModal>Deseja realmente excluir o registro da refeição?</LabelModal>
                        <BoxButtons>
                            <Button 
                                type="OUTLINED" 
                                text="Cancelar"
                                onPress={handleCancelar}
                            />
                            <Button 
                                type="SOLID"
                                text="Sim, excluir"
                                onPress={handleExcluir}
                            />
                        </BoxButtons>
                    </ModalView>
                </ModalCenteredView>
            
        </Modal>

    );
}