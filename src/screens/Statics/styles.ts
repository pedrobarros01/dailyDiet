import styled, { css } from "styled-components/native";

export type MediaProps = 'ACIMA' | 'ABAIXO';

type Props = {
    media: MediaProps;
}

export const Container = styled.View<Props>`
    flex: 1;
    background-color: ${({theme, media}) => media === 'ACIMA' ? theme.COLORS.BRAND.GREEN.LIGHT : theme.COLORS.BRAND.RED.LIGHT};
`;
export const BoxStaticsGeneral = styled.View`
    flex: 6;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.BASE.GRAY_700};
    border-radius: 20px;
    padding: 24px;

`;
export const Title = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.XS}px;
        color: ${theme.COLORS.BASE.GRAY_100};
        text-align: center;
        margin-bottom: 12px;
    `}
`;
export const BoxHighLight = styled.View<Props>`
    flex: 1;
    width: 100%;
    background-color: ${({theme, media}) => media === 'ACIMA' ? theme.COLORS.BRAND.GREEN.LIGHT : theme.COLORS.BRAND.RED.LIGHT};
`;
export const BoxStatics = styled.View`
    flex: 1;

    width: 100%;

`; 
export const BoxMeals = styled.View`
    flex: 1;
    min-height: 100px;
    max-height: 100px;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`;
