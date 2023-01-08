import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    min-height: 100px;
    max-height: 100px;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BASE.GRAY_600};
    margin-bottom: 24px;
    margin-right: 12px;
    
`;