import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { Image } from "react-native";
import { MediaProps } from "@screens/Statics/styles";

type Props= {
    dieta: MediaProps;
}

export const Container = styled(SafeAreaView)`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.BASE.GRAY_700};
    width: 100%;
`;
export const Box = styled.View`
    flex: 1;
    align-items: center;
    min-height: 500px;
    max-height: 500px;
    width: 90%;
`;

export const Title = styled.Text<Props>`
    ${({theme, dieta}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.M}px;
        color: ${dieta === 'ACIMA' ? theme.COLORS.BRAND.GREEN.DARK : theme.COLORS.BRAND.RED.DARK};
        text-align: center;
        margin-bottom: 10px;
    `}
`;


export const SubTitle = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.BODY.M}px;
        color: ${theme.COLORS.BASE.GRAY_100};
        text-align: center;
    `}
`;
export const BoxInfo = styled.View`
    flex: 1;
    width: 100%;
    min-height: 100px;
    max-height: 100px;
    align-items: center;
`;
export const ImageInfo = styled(Image)`
    flex: 1;
    width: 70%;
    margin-bottom: 12px;
    
`;
export const Strong = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;

