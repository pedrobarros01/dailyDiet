import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export type BackGroundType = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: BackGroundType;
}

export const Container = styled(TouchableOpacity)<Props>`
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    min-height: 125px;
    max-height: 125px;
    width: 100%;
    background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.BRAND.GREEN.LIGHT : theme.COLORS.BRAND.RED.LIGHT};
    margin: 12px 0px;
    border-radius: 8px;
`;
export const ContainerIcon = styled.View`
    width: 100%;
    height: 20%;
    align-items: flex-end;

`;
export const Icon = styled(Feather).attrs<Props>(({theme, type}) => ({
    size: 32,
    color: type === 'PRIMARY' ? theme.COLORS.BRAND.GREEN.DARK : theme.COLORS.BRAND.RED.DARK,
    name: 'arrow-up-right'
}))`
    margin-right: 6px;

`;
