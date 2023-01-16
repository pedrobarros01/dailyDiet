import { Container, Title, ButtonTypesProp, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";
import {Feather} from "@expo/vector-icons";
type Props = TouchableOpacityProps & {
    type?: ButtonTypesProp,
    icon?: keyof typeof Feather.glyphMap | null;
    text: string;
}

export function Button({type = 'SOLID', icon = null, text, ...rest} : Props){
    return(
        <Container type={type} {...rest} >
            {
                icon && <Icon name={icon} type={type} />
            }
            <Title type={type} >{text}</Title>
        </Container>
    );
}