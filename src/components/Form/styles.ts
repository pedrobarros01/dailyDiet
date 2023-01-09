import styled from "styled-components/native";

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
    min-height: 300px;
    max-height: 300px;
    align-items: center;
    width: 100%;
`;