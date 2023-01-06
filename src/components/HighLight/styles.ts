import styled, { css } from "styled-components/native";


export const Container = styled.View`
    height: 80%;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.G}px;
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