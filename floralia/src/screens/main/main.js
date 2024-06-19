import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../splash/splash';
import { Login } from '../login/login';
import { Profile } from '../profile/profile';
import { Favoritos } from '../favoritos/favoritos';
import { Carrinho } from '../carrinho/carrinho';
import { Home } from '../home/home';
import { Localization } from '../localization/localization';


const Drawer = createDrawerNavigator();

export const Main = () => {

    return (

        <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Login"

        >

            <Drawer.Screen
                name="home"
                component={Home}
                options={{ title: "Página Inicial" }}
            />

            <Drawer.Screen
                name="Profile"
                component={Profile}
                options={{ title: "Perfil" }}
            />

            <Drawer.Screen
                name="Favoritos"
                component={Favoritos}
                options={{ title: "Favoritos" }}
            />

            <Drawer.Screen
                name="Carrinho"
                component={Carrinho}
                options={{ title: "Carrinho" }}
            />
            <Drawer.Screen
                name="Mapa"
                component={Localization}
                options={{ title: "Localização" }}
            />
            <Drawer.Screen
                name="Login"
                component={Login}
                options={{ title: " " }}
            />


        </Drawer.Navigator>

    )
}

{/* <Drawer.Screen
                    name="Main"
                    component={main}
                    options={{ title: "Main" }}
                /> */}
{/* <Drawer.Screen
                    name="Splash"
                    component={Splash}
                    options={{ title: "Splash" }}
                /> */}


{/* <Drawer.Screen
        name="recuperarSenha"
        component={recuperarSenha}
        options={{ title: "RecuperarSenha" }}
      /> */}