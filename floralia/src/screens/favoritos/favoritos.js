import { View } from "react-native"
import { Container } from "../../components/container/style"
import { Header } from "../../components/header/style"
import { LogoHeader } from "../../components/images/style"
import { TitleVerde } from "../../components/title/style"
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export const Favoritos = ({navigation}) => {
    return (
        <Container>
            <Header>

                <View style={{ marginLeft: 14 }}>
                    <Ionicons name="menu" size={40} color="#B83B5E" />
                </View>

                <LogoHeader
                    source={require('../../assets/img/logo-removebg-preview 2Logo_Floralia (1) 1.png')}
                />

                <View style={{ marginRight: 14 }}>
                    <MaterialCommunityIcons name="cart-outline" size={37} color="#B83B5E" margin-left="12px"  onPress={() => navigation.navigate("Carrinho")}/>
                </View>
               
            </Header>

            <TitleVerde>Favoritos</TitleVerde>


        </Container>

    )
}