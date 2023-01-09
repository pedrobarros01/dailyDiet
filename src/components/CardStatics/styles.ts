import { MediaProps } from "@screens/Statics/styles";
import theme from "src/theme";
import styled, { css } from "styled-components/native";

export type CardProps = 'INFO' | 'MEDIA' ;

type Props = {
    media: MediaProps;
    type: CardProps;
}

export const Container = styled.View<Props>`
    flex: ${({theme, type}) => type === 'INFO' ? 1: 0.47};
    min-height: 100px;
    max-height: 100px;
    align-items: center;
    justify-content: center;
    background-color: ${({theme, media, type}) => type === 'INFO' ? theme.COLORS.BASE.GRAY_600 : media === 'ACIMA'? theme.COLORS.BRAND.GREEN.LIGHT : theme.COLORS.BRAND.RED.LIGHT};
    margin-bottom: 24px;
    border-radius: 8px;
`;
export const Title = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.M}px;
        color: ${theme.COLORS.BASE.GRAY_100};
        text-align: center;
    `}
`;

export const SubTitle = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.BODY.S}px;
        color: ${theme.COLORS.BASE.GRAY_200};
        text-align: center;
    `}

`;