import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { Loading } from '@components/Loading';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Home } from '@screens/Home';
export default function App() {
  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold});


  return (
    <ThemeProvider theme={theme}>   
      <View style={styles.container}>
        { 
          fontsLoaded ?  <Home /> : <Loading />
        }
        <StatusBar 
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
