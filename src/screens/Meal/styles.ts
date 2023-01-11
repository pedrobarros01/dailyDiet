import styled, { css } from "styled-components/native";
import {FontAwesome} from "@expo/vector-icons";
import { MediaProps } from "@screens/Statics/styles";
type Props = {
    media: MediaProps;
}

export const Container = styled.View<Props>`
    flex: 1;
    background-color: ${({theme,media}) => media === 'ACIMA' ? theme.COLORS.BRAND.GREEN.LIGHT : theme.COLORS.BRAND.RED.LIGHT};
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
        margin-bottom: 12px;
        text-align: center;
    `}
`;
export const ChipCard = styled.View`
    flex: 1;
    min-height: 40px;
    max-height: 40px;
    width: 40%;
    border-radius: 100px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: ${({theme}) => theme.COLORS.BASE.GRAY_600};
`;
export const TitleChip = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.BODY.S}px;
        color: ${theme.COLORS.BASE.GRAY_100};
    `}
`;

export const Icon = styled(FontAwesome).attrs<Props>(({theme, media}) => ({
    size: 12,
    color: media === 'ACIMA' ? theme.COLORS.BRAND.GREEN.DARK : theme.COLORS.BRAND.RED.DARK
}))``;
