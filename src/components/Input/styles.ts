import styled, { css } from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    width: 100%;
    align-items: flex-start;
`;
export const Label = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.XS}px;
        color: ${theme.COLORS.BASE.GRAY_200};
        text-align: center;
        margin-bottom: 12px;
    `}
`;

export const FormInput = styled.TextInput`
    flex: 0.2;
    width: 100%;
    padding: 14px;
    border-radius: 6px;
    border: 1px solid ${({theme}) => theme.COLORS.BASE.GRAY_500};
`;