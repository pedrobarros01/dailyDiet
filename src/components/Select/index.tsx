import { TouchableOpacityProps } from "react-native";
import { Container, Icon, LabelSelect, SelectProps } from "./styles";

type Props = TouchableOpacityProps & {
    select: SelectProps;
    icon: SelectProps;
    label: string;
}

export function Select({select, icon, label, ...rest}: Props){
    return(
        <Container select={select} {...rest} >
            <Icon name="circle" iconSelect={icon} />
            <LabelSelect>{label}</LabelSelect>
        </Container>
    );
}