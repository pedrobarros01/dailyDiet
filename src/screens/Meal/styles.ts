import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.BRAND.GREEN.LIGHT};
`;
export const Box = styled.View`
    flex: 1;
    padding: 24px;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: ${({theme}) => theme.COLORS.BASE.GRAY_700};
`;
export const BoxTitleAndSubTitle = styled.View`
    flex: 1;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
`;
export const BoxButton = styled.View`
    flex: 1;
    width: 100%;
    min-height: 120px;
    max-height: 120px;
`;
export const NameMeal = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.M}px;
        color:  ${theme.COLORS.BASE.GRAY_100};
        text-align: center;
        margin-bottom: 8px;
    `}
`;
export const DescMeal = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.BODY.M}px;
        color: ${theme.COLORS.BASE.GRAY_200};
        margin-bottom: 24px;
    `}
`;
export const DateTimeTitle = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.XS}px;
        color: ${theme.COLORS.BASE.GRAY_100};
        text-align: center;
        margin-bottom: 8px;
    `}
`;
export const DateTime = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.BODY.M}px;
        color: ${theme.COLORS.BASE.GRAY_200};
        text-align: center;
    `}
`;