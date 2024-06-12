import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Container, FlatContainer, FooterContainer, TextContainerCart } from "../../components/container/style";
import { Header, HeaderCarrinho } from "../../components/header/style";
import { LogoHeaderCarrinho } from "../../components/images/style";
import { CardPreco, TitleVerde } from "../../components/title/style";
import { Ionicons } from '@expo/vector-icons';
import { CardCarrinho } from "../../components/cards/cardCarrinho/cardCarrinho";
import { ButtonGreenCart } from "../../components/button/style";
import api from "../../services/services";
import { TextButtonVerde, TextButtonVerdeCard, TextButtonVerdeCart } from "../../components/textbutton/style";

export const Carrinho = ({ navigation }) => {
    const [listaCarrinho, setListaCarrinho] = useState([]);
    const [token, setToken] = useState({});
    const [total, setTotal] = useState(0);

    async function ProfileLoad() {
        const tokenDecode = await userDecodeToken();

        if (tokenDecode != null) {
            setToken(tokenDecode);
            ListarCarrinho(tokenDecode.user);
        }
    }

    useEffect(() => {
        ProfileLoad();
    }, []);

    useEffect(() => {
        calcularTotal();
    }, [listaCarrinho]);

    async function ListarCarrinho(user) {
        try {
            const response = await api.get(`/Carrinho?idUsuario=${user}`);
            setListaCarrinho(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    function calcularTotal() {
        const total = listaCarrinho.reduce((sum, item) => sum + item.precoProduto, 0);
        setTotal(total);
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

            <FooterContainer>

                <TextContainerCart>
                    <TitleVerde>TOTAL: <CardPreco> R$: {total.toFixed(2)} </CardPreco> </TitleVerde>
                </TextContainerCart>

                <ButtonGreenCart>
                    <TextButtonVerdeCart>Finalize sua encomenda</TextButtonVerdeCart>
                </ButtonGreenCart>

            </FooterContainer>

        </Container>
    );
};