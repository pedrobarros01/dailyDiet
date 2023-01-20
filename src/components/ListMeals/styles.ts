import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    
    align-items: flex-start;
    width: 90%;
    margin-bottom: 12px;
`;

export const Date = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.S}px;
        color: ${theme.COLORS.BASE.GRAY_100};
        text-align: center;
        margin-top: 12px;
        margin-bottom: 6px;
    `}
`;
export const BoxList = styled.View`
    flex: 1;
    width: 100%;
    min-height: 300px;
    max-height: 300px;
`;