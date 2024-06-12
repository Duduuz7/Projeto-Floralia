import React, { useEffect, useState } from "react";
import { Container, FlatContainer, FooterContainer, TextContainerCart } from "../../components/container/style";
import { CardPreco, TitleVerde } from "../../components/title/style";
import { CardCarrinho } from "../../components/cards/cardCarrinho/cardCarrinho";
import { ButtonGreenCart } from "../../components/button/style";
import api from "../../services/services";
import { TextButtonVerdeCart } from "../../components/textbutton/style";
import { HeaderComponentCarrinho } from "../../components/header/header"

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

            <HeaderComponentCarrinho
                navigation={navigation}
            />

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