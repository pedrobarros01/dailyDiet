import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import {FontAwesome} from "@expo/vector-icons";
export type SelectProps = 'SIM' | 'NAO' | 'VAZIO';
type Props = {
    select: SelectProps;
}
type PropsIcon = {
    iconSelect: SelectProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    ${({theme, select}) => css`
        flex: 0.48;
        min-height: 50px;
        max-height: 50px;
        border-radius: 6px;
        
        background-color: ${select === 'SIM' ? theme.COLORS.BRAND.GREEN.LIGHT : select === 'NAO' ? theme.COLORS.BRAND.RED.LIGHT : theme.COLORS.BASE.GRAY_600};
        border: ${select === 'SIM' || select === 'NAO' ? 1: 0}px solid ${select === 'SIM' ? theme.COLORS.BRAND.GREEN.DARK : theme.COLORS.BRAND.RED.DARK};
        flex-direction: row;
        justify-content: center;
        align-items: center;
    `}
    
`;
export const LabelSelect = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.XS}px;
        color: ${theme.COLORS.BASE.GRAY_100};
        text-align: center;
        margin-left: 12px;
    `}
`;
export const Icon = styled(FontAwesome).attrs<PropsIcon>(({theme, iconSelect}) => ({
    size: 12,
    color: iconSelect === 'SIM' ? theme.COLORS.BRAND.GREEN.DARK :  theme.COLORS.BRAND.RED.DARK
}))``;