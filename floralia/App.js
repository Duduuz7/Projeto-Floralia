import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navegacao } from './src/screens/navegacao/navegacao';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from './src/screens/login/login';
import { recuperarSenha } from './src/screens/recuperarSenha/recuperarSenha';
import {  useFonts, Exo2_400Regular, Exo2_500Medium, Exo2_600SemiBold, Exo2_700Bold } from '@expo-google-fonts/exo-2';
import { Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import { atualizarSenha } from './src/screens/atualizarSenha/atualizarSenha';
import Splash from './src/screens/splash/splash';
import { Profile } from './src/screens/profile/profile';
import { cadastro } from './src/screens/cadastro/cadastro';


const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontsError] = useFonts({
    Exo2_400Regular,
    Exo2_500Medium,
    Exo2_600SemiBold,
    Exo2_700Bold,
    Quicksand_400Regular, 
    Quicksand_500Medium, 
    Quicksand_600SemiBold, 
    Quicksand_700Bold 
  })

  if (!fontsLoaded && !fontsError) {
    return null;
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ title: "Splash" }}
        />

        <Stack.Screen
          name="Navegacao"
          component={Navegacao}
          options={{ title: "Navegação" }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{title: "Profile"}}
        />

        <Stack.Screen
          name="recuperarSenha"
          component={recuperarSenha}
          options={{title: "RecuperarSenha"}}
        />
        <Stack.Screen
          name="atualizarSenha"
          component={atualizarSenha}
          options={{title: "AtualizarSenha"}}
        />
        <Stack.Screen
          name="cadastro"
          component={cadastro}
          options={{title: "Cadastro"}}
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
