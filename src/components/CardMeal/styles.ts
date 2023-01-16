import styled, { css } from "styled-components/native";
import {FontAwesome} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

type Iconprops = {
    diet: boolean;
}

export const Container = styled(TouchableOpacity)`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    width: 100%;
    flex-direction: row;
    margin-bottom: 12px;
    border: 1px solid ${({theme}) => theme.COLORS.BASE.GRAY_500};
    justify-content: space-around;
    align-items: center;
    border-radius: 6px;
`;
export const Hour = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.BODY.XS}px;
        color: ${theme.COLORS.BASE.GRAY_100};
        text-align: center;
        width: 50px;
    `}
`;

export const Line = styled.View`
    width: 1px;
    height: 35px;
    border: 1px solid ${({theme}) => theme.COLORS.BASE.GRAY_400};
`;
export const Title = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.BODY.M}px;
        color: ${theme.COLORS.BASE.GRAY_200};
        text-align: center;
        padding: 12px;
        flex: 4;
    `}
`;
export const COntainerIcon = styled.View`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled(FontAwesome).attrs<Iconprops>(({theme, diet}) => ({
    size: 24,
    color: diet ? theme.COLORS.BRAND.GREEN.MID : theme.COLORS.BRAND.RED.MID
}))``;
