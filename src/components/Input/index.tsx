import { Container, FormInput, Label } from "./styles";
import { TextInputProps } from "react-native";
type Props = TextInputProps & {
    multilinha?: boolean;
    label: string;
    date?: boolean;

}
export function Input({multilinha = false, label, date = false, ...rest}:Props){
    return(
        <Container multilinha={multilinha} date={date} >
            <Label>{label}</Label>
            <FormInput date={date} multilinha={multilinha} multiline={multilinha} {...rest}/>
        </Container>
    );
}