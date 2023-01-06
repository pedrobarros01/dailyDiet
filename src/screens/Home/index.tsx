import { Container, Header, ImageLogo, ImageUser } from "./styles";
import logo from "@assets/logo.png";
import user from "@assets/user.png";
import { StaticsOverview } from "@components/StaticsOverview";
export function Home(){
    return(
        <Container>
            <Header>
                <ImageLogo source={logo} />
                <ImageUser source={user} />
            </Header>
            <StaticsOverview />
        </Container>
    );
}