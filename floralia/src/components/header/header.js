import { Header } from './style'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LogoHeader } from '../images/style';
import { View } from 'react-native';

export const HeaderComponent = () => {
    return(
        <Header>

        <View style={{ marginLeft: 14 }}>
            <Ionicons name="menu" size={30} color="#B83B5E" />
        </View>

        <LogoHeader
            source={require('../../assets/img/logo-removebg-preview 2Logo_Floralia (1) 1.png')}
        />

        <View style={{ marginRight: 14 }}>
            <MaterialCommunityIcons name="cart-outline" size={28} color="#B83B5E" margin-left="12px"  onPress={() => navigation.navigate("Carrinho")}/>
        </View>
       
    </Header>
    )
}