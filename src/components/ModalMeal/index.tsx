import { Button } from "@components/Button";
import { Modal } from "react-native";
import { ModalCenteredView, BoxButtons, LabelModal, ModalView } from "./styles";
type Props = {
    mostrar:boolean;
}

export function ModalMeal({mostrar = false}:Props){
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
                            />
                            <Button 
                                type="SOLID"
                                text="Sim, excluir"
                            />
                        </BoxButtons>
                    </ModalView>
                </ModalCenteredView>
            
        </Modal>

    );
}