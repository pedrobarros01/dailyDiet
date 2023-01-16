import { BoxMeal, Container, Header, ImageLogo, ImageUser, Label } from "./styles";
import logo from "@assets/logo.png";
import user from "@assets/user.png";
import { StaticsOverview } from "@components/StaticsOverview";
import { Button } from "@components/Button";
import { FlatList, ScrollView, Text } from "react-native";
import { ListMeals } from "@components/ListMeals";
import { useNavigation } from "@react-navigation/native";
export function Home(){
    const navigation = useNavigation();

    const array: string[] = ['1','2','3','4']
    function handleCreate(){
        navigation.navigate("Create");
    }
    
    return(
        <Container>
            <Header>
                <ImageLogo source={logo} />
                <ImageUser source={user} />
            </Header>
            <StaticsOverview />
            <BoxMeal>
                <Label>Refeições</Label>
                <Button
                    text="Nova refeição"
                    icon="plus"
                    onPress={handleCreate}
                />
                
                <FlatList 
                    data={array}
                    keyExtractor={(item) => item}
                    renderItem={({item}) => <ListMeals />}
                    showsVerticalScrollIndicator={false}
                    style={{width: '100%'}}
                />
                
                
            </BoxMeal>
        </Container>
    );
}