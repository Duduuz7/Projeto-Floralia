import { View } from "react-native"
import { Container, FlatContainer, FooterContainer } from "../../components/container/style"
import { Header, HeaderCarrinho } from "../../components/header/style"
import { LogoHeader, LogoHeaderCarrinho } from "../../components/images/style"
import { TitleVerde } from "../../components/title/style"
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from "react"
import { Favoritos } from "../favoritos/favoritos"
import { Card } from "../../components/cards/cardsEncomenda/cardEncomenda"
import { CardProduto } from "../../components/cards/cardFavoritos/cardFavoritos"
import { CardCarrinho } from "../../components/cards/cardCarrinho/cardCarrinho"
import { ButtonGreenCart } from "../../components/button/style"
import api from "../../services/services"


export const Carrinho = ({ navigation }) => {

    const [listaCarrinho, setListaCarrinho] = useState([])

    const [token, setToken] = useState({})

    async function ProfileLoad() {
        const tokenDecode = await userDecodeToken();

        if (tokenDecode != null) {
            setToken(tokenDecode)

            ListarCarrinho(tokenDecode.user)
        }
    }

    useEffect(() => {
        ProfileLoad();
    }, []);

    async function ListarCarrinho() {

        // console.log(`/Carrinho?id=${token.idUsuario}`);
        await api.get(`/Carrinho?idUsuario=${token.user}`).then(response => {

            setListaCarrinho(response.data)
            console.log(response.data);

        }).catch(error => {
            console.log(error);
        })
    }


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
                data={listaCarrinho}
                renderItem={({ item }) => (
                    <CardCarrinho
                        navigation={navigation}
                        name={item.name}
                        status={item.status}
                        precoProduto={item.precoProduto}
                    />
                )}

            />

            {/* <FooterContainer>
                
            </FooterContainer> */}

        </Container>

    )
}