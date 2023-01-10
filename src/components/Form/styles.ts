import styled, { css } from "styled-components/native";
import { ScrollView } from "react-native";
export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.BASE.GRAY_700};
    padding: 24px;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;
export const BoxForm = styled.View`
    flex: 1;
    width: 100%;
    
`;
export const BoxDateTime = styled.View`
    width: 100%;
    height: 70px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const BoxSelects = styled.View`
    flex: 1;
    min-height: 100px;
    max-height: 100px;
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
export const BoxSelect = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;