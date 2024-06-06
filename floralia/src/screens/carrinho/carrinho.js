import { View } from "react-native"
import { Container, FlatContainer } from "../../components/container/style"
import { Header, HeaderCarrinho } from "../../components/header/style"
import { LogoHeader, LogoHeaderCarrinho } from "../../components/images/style"
import { TitleVerde } from "../../components/title/style"
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from "react"
import { Favoritos } from "../favoritos/favoritos"
import { Card } from "../../components/cards/cardsEncomenda/cardEncomenda"
import { CardProduto } from "../../components/cards/cardFavoritos/cardFavoritos"


export const Carrinho = ({navigation}) => {

    const [carrinho, setCarrinho] = useState([
        { name: 'Buque de rosas', id: '1', status: 'Pendente', precoProduto: '389,90' },
        { name: 'Buque de flores', id: '2', status: 'Recebido', precoProduto: '389,90'  },
        { name: 'Buque de lirios', id: '3', status: 'Cancelado', precoProduto: '389,90'  },
        { name: 'Buque de lirios', id: '4', status: 'pendente', precoProduto: '389,90'  },
    ]);

    return (
        <Container>
            <Header>

                <View style={{ marginLeft: 14 }}>
                    <Ionicons name="menu" size={30} color="#B83B5E" />
                </View>

                <LogoHeaderCarrinho
                    source={require('../../assets/img/logo-removebg-preview 2Logo_Floralia (1) 1.png')}
                />

                {/* <View style={{ marginRight: 14 }}>
                    <MaterialCommunityIcons name="cart-outline" size={37} color="#B83B5E" margin-left="12px" />
                </View> */}

                
            </Header>

            <TitleVerde>Carrinho</TitleVerde>

            <FlatContainer
                keyExtractor={(item) => item.id}
                data={carrinho}
                renderItem={({ item }) => (
                    <CardProduto
                        navigation={navigation}
                        name={item.name}
                        status={item.status}
                        precoProduto={item.precoProduto}
                    />
                )}

            />


        </Container>

    )
}