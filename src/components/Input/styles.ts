import styled, { css } from "styled-components/native";
type Props = {
    multilinha: boolean;
    date: boolean;
}

export const Container = styled.View<Props>`
    flex: 1;
    min-height: ${({theme, multilinha}) => multilinha ? 142 : 70}px;
    max-height: ${({theme, multilinha}) => multilinha ? 142 : 70}px;
    justify-content:center;
    width: 100%;
    align-items: flex-start;
    margin-bottom: ${({theme, multilinha}) => multilinha ? 46 : 32}px;
    
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

export const FormInput = styled.TextInput<Props>`
    height: ${({theme, multilinha}) => multilinha ? 120 : 48}px;
    width:  ${({theme, date}) => date ? 95 : 100}%;
    padding: 14px;
    border-radius: 6px;
    border: 1px solid ${({theme}) => theme.COLORS.BASE.GRAY_500};
    
`;