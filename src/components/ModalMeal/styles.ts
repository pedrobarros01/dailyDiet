import styled, { css } from "styled-components/native";


export const ModalCenteredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.25);
`;
export const ModalView = styled.View`
    flex: 1;
    min-height: 225px;
    max-height: 225px;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    background-color: ${({theme}) => theme.COLORS.BASE.GRAY_700};
    border-radius: 8px;
`;

export const LabelModal = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.S}px;
        color: ${theme.COLORS.BASE.GRAY_200};
        text-align: center;
    `}
`;
export const BoxButtons = styled.View`
    flex: 1;
    min-height: 70px;
    max-height: 70px;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 12px;
    padding-right: 12px;
    align-items: center;
`;