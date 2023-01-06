import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import {Feather} from "@expo/vector-icons";


export type ButtonTypesProp = 'SOLID' | 'OUTLINED';
type Props = {
    type: ButtonTypesProp;
}


export const Container = styled(TouchableOpacity)<Props>`
    flex: 1;
    min-height: 66px;
    max-height: 66px;
    width: 100%;

    background-color: ${({theme, type}) => type === 'SOLID' ? theme.COLORS.BASE.GRAY_200 : theme.COLORS.BASE.GRAY_700};
    
    
    flex-direction: row;
    justify-content: center;
    align-items: center;
    

    border: ${({theme, type}) =>type === 'SOLID' ? null : `1px solid ${theme.COLORS.BASE.GRAY_100}`};
    border-radius: 6px;
`;
export const Title = styled.Text<Props>`
    ${({theme, type}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.XS}px;
        color: ${type === 'SOLID' ? theme.COLORS.BASE.WHITE : theme.COLORS.BASE.GRAY_100};
        text-align: center;
        margin-left: 6px;
    `}

`;
export const Icon = styled(Feather).attrs<Props>(({theme, type}) => ({
    size: 24,
    color: type === 'SOLID' ? theme.COLORS.BASE.WHITE : theme.COLORS.BASE.GRAY_100


}))``;