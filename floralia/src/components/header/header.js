import { Header } from './style'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LogoHeader, LogoHeaderCarrinho } from '../images/style';
import { TouchableOpacity, View } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

export const HeaderComponent = ({ navigation }) => {
    return (
        <Header>

            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={{ marginLeft: 14 }}>
                <Ionicons name="menu" size={30} color="#B83B5E" />
            </TouchableOpacity>

            <LogoHeader
                source={require('../../assets/img/logo-removebg-preview 2Logo_Floralia (1) 1.png')}
            />

            <View style={{ marginRight: 14 }}>
                <MaterialCommunityIcons name="cart-outline" size={28} color="#B83B5E" margin-left="12px" onPress={() => navigation.navigate('Carrinho')} />
            </View>

        </Header>
    )
}

export const HeaderComponentCarrinho = ({ navigation }) => {
    return (
        <Header>

            <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: 14 }}>
                <Ionicons name="menu" size={30} color="#B83B5E" />
            </TouchableOpacity>

            <LogoHeaderCarrinho
                source={require('../../assets/img/logo-removebg-preview 2Logo_Floralia (1) 1.png')}
            />

        </Header>
    )
}