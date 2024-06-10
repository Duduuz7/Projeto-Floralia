import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/splash/splash';
import { Profile } from './src/screens/profile/profile';
import { Login } from './src/screens/login/login';
import { recuperarSenha } from './src/screens/recuperarSenha/recuperarSenha';
import { StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Exo2_400Regular,
  Exo2_500Medium,
  Exo2_600SemiBold,
  Exo2_700Bold,
} from "@expo-google-fonts/exo-2";
import {
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import { cadastro } from "./src/screens/cadastro/cadastro";
import { Home } from "./src/screens/home/home";
import { NavigationContainer } from '@react-navigation/native';
import { Navegacao } from './src/screens/navegacao/navegacao';
import { Favoritos } from './src/screens/favoritos/favoritos';
import { Carrinho } from './src/screens/carrinho/carrinho';
import { ResultadoPesquisa } from './src/screens/resultadoPesquisa/resultadoPesquisa';
import { CodigoRecuperarSenha } from './src/screens/codigoRecuperarSenha/codigoRecuperarSenha';
import { atualizarSenha } from './src/screens/atualizarSenha/atualizarSenha';

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
    Quicksand_700Bold,
  });

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
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
          options={{ title: "Profile" }}
        />

        <Stack.Screen
          name="Favoritos"
          component={Favoritos}
          options={{ title: "Favoritos" }}
        />

        <Stack.Screen
          name="Carrinho"
          component={Carrinho}
          options={{ title: "Carrinho" }}
        />

        <Stack.Screen
          name="recuperarSenha"
          component={recuperarSenha}
          options={{ title: "RecuperarSenha" }}
        />

        <Stack.Screen
          name="ResultadoPesquisa"
          component={ResultadoPesquisa}
          options={{ title: "ResultadoPesquisa" }}
        />

        <Stack.Screen
          name="codigoRecuperarSenha"
          component={CodigoRecuperarSenha}
          options={{ title: "CodigoRecuperarSenha" }}
        />

        <Stack.Screen
          name="atualizarSenha"
          component={atualizarSenha}
          options={{ title: "AtualizarSenha" }}
        />
        <Stack.Screen
          name="cadastro"
          component={cadastro}
          options={{ title: "Cadastro" }}
        />

        <Stack.Screen
          name="home"
          component={Home}
          options={{ title: "Home" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
