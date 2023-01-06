import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { Image } from "react-native";
export const Container = styled(SafeAreaView)`
    flex: 1;
    padding: 0px 24px;
    background-color: ${({theme}) => theme.COLORS.BASE.GRAY_700};
`;
export const Header = styled.View`
    flex: 1;
    min-height: 76px;
    max-height: 76px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;
export const ImageLogo = styled(Image)`
    width: 100px;
    height: 50px;
`;
export const ImageUser = styled(Image)`
    width: 50px;
    height: 50px;
`;
