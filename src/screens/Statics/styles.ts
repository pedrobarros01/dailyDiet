import styled from "styled-components/native";

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
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.BASE.GRAY_700};
    border-radius: 20px;

`;
export const BoxHighLight = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BRAND.GREEN.LIGHT}
`;
