import styled, { css } from "styled-components/native";
import {AntDesign} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
    flex: 1;
    min-height: 80px;
    max-height: 80px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    
    
    background-color: ${({theme}) => theme.COLORS.BRAND.GREEN.LIGHT};
`;
export const Title = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.S}px;
        color: ${theme.COLORS.BASE.GRAY_100};
        text-align: center;
        margin-top: 24px;
        margin-right: 32px;
    `}
`;
export const BoxTitle = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
export const ButtonIcon = styled(TouchableOpacity)`
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;

`;
export const BoxIcon = styled.View`
    flex: 1;
    
`;
export const IconBack = styled(AntDesign).attrs(({theme}) => ({
    size: 24,
    color: theme.COLORS.BRAND.GREEN.DARK
}))`
margin-top: 24px;
`;
