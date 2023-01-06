import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";


export const Container = styled(TouchableOpacity)`
    flex: 1;
    min-height: 125px;
    max-height: 125px;
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BRAND.GREEN.LIGHT};
    margin: 12px 0px;
    border-radius: 8px;
`;