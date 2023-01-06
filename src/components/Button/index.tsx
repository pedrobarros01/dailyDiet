import { Container, Title, ButtonTypesProp, Icon } from "./styles";
import {Feather} from "@expo/vector-icons";
type Props = {
    type?: ButtonTypesProp,
    icon: keyof typeof Feather.glyphMap | null;
    text: string;
}

export function Button({type = 'SOLID', icon = null, text} : Props){
    return(
        <Container type={type} >
            {
                icon && <Icon name={icon} type={type} />
            }
            <Title type={type} >{text}</Title>
        </Container>
    );
}