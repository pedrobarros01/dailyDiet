import styled, { css } from "styled-components/native";
import {AntDesign} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export type BackProps = 'ACIMA' | 'ABAIXO' | 'NOVO'
type Props = {
    type: BackProps;
}
export const Container = styled.View`
    flex: 1;
    min-height: 80px;
    max-height: 80px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    

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
    width: 100%;
    align-items: center;
    justify-content: center;
`;
export const ButtonIcon = styled(TouchableOpacity)`
    width: 72px;
    height: 72px;
    justify-content: center;
    align-items: center;


`;
export const BoxIcon = styled.View`
    flex: 1;
    
    
`;
export const IconBack = styled(AntDesign).attrs<Props>(({theme, type}) => ({
    size: 24,
    color: type === 'ACIMA' ? theme.COLORS.BRAND.GREEN.DARK : type === 'ABAIXO' ? theme.COLORS.BRAND.RED.DARK : theme.COLORS.BASE.GRAY_200
}))`
margin-top: 24px;
`;
