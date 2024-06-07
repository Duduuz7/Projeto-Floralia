import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navegacao } from './src/screens/navegacao';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {  useFonts,
  Exo2_400Regular,
  Exo2_600SemiBold,
  Exo2_700Bold, } from '@expo-google-fonts/exo-2';
  import { Login } from './src/screens/login';
import { Localization } from './src/screens/localization/localization';
import { ModalEncomenda } from './src/screens/ModalEncomenda/ModalEncomenda';
import { ModalCancelamento } from './src/screens/ModalEncomenda/ModalCancelamento';
import { ModalCarrinho } from './src/screens/ModalEncomenda/ModalCarrinho';

const Stack = createNativeStackNavigator();

export default function App() {

  const[fontsLoaded, fontsError] = useFonts({
    Exo2_400Regular,
    Exo2_600SemiBold,
    Exo2_700Bold,
  })

  if (!fontsLoaded && !fontsError) {
    return null;
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Navegacao"
          component={Navegacao}
          options={{title: "Navegação"}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: "Login"}}
        />
        <Stack.Screen
          name="Localization"
          component={Localization}
          options={{title: "Localization"}}
        />
        <Stack.Screen
          name="ModalEncomenda"
          component={ModalEncomenda}
          options={{title: "Modal Encomenda"}}
        />
        <Stack.Screen
          name="ModalCancelamento"
          component={ModalCancelamento}
          options={{title: "Modal Cancelamento"}}
        />
        <Stack.Screen
          name="ModalCarrinho"
          component={ModalCarrinho}
          options={{title: "Modal Carrinho"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
