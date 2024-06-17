import React, { useEffect, useState } from "react";
import { Container, FlatContainer, FooterContainer, TextContainerCart } from "../../components/container/style";
import { CardPreco, TitleVerde } from "../../components/title/style";
import { CardCarrinho } from "../../components/cards/cardCarrinho/cardCarrinho";
import { ButtonGreenCart } from "../../components/button/style";
import api from "../../services/services";
import { TextButtonVerdeCart } from "../../components/textbutton/style";
import { HeaderComponent, HeaderComponentCarrinho } from "../../components/header/header"
import { userDecodeToken } from "../../utils/auth";
import { ActivityIndicator } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { ModalRetirar } from "../../components/modalEncomenda/ModalCancelamento";
import { ModalEncomenda } from "../../components/modalEncomenda/ModalEncomenda";

export const Carrinho = ({ navigation }) => {
    const [listaCarrinho, setListaCarrinho] = useState([]);
    const [token, setToken] = useState({});
    const [total, setTotal] = useState(0);
    const [showModalCancelar, setShowModalCancelar] = useState(false);
    const [showModalConfirmar, setShowModalConfirmar] = useState(false);
    const [pCarrinhoSelecionado, setPCarrinhoSelecionado] = useState();
    const [statusCarrinho, setStatusCarrinho] = useState(null);



    function MostrarModal(modal, carrinho) {

        setPCarrinhoSelecionado(carrinho)

        if (modal == 'cancelar') {
            setShowModalCancelar(true)
        }
    }

    async function ProfileLoad() {
        const tokenDecode = await userDecodeToken();

        if (tokenDecode != null) {
            setToken(tokenDecode);
            ListarCarrinho(tokenDecode.user);
        }
    }

    useFocusEffect(React.useCallback(() => {
        ProfileLoad()
    }, [showModalCancelar, showModalConfirmar]))

    // useEffect(() => {
    //     ListarCarrinho();
    // }, []);

    useEffect(() => {
        calcularTotal();
    }, [listaCarrinho]);

    async function ListarCarrinho(user) {
        try {
            // if (token) {
            await api.get(`/Carrinho/BuscarPorUsuario?idUsuario=${user}`).then(response => {

                setListaCarrinho(response.data);
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            })
            // }
        } catch (error) {
            console.log(error);
        }
    }
    

    function calcularTotal() {
        // Filtra os itens com status null e calcula o total
        const total = listaCarrinho
            .filter(item => item.status == null)
            .reduce((sum, item) => sum + item.idProdutoNavigation.preco, 0);
        
        // Define o total formatado
        setTotal(total.toFixed(2));
    }




    return (
        <Container>

            {token ?
                (<>
                    <HeaderComponentCarrinho
                        navigation={navigation}
                    />

                    <TitleVerde>Carrinho</TitleVerde>
                    
                    <FlatContainer
                        keyExtractor={(item) => item.id}
                        data={listaCarrinho}
                        renderItem={({ item }) => (
                            statusCarrinho == item.status ? 
                            <CardCarrinho
                                onPressCarrinho={() => MostrarModal('cancelar', item)}
                                navigation={navigation}
                                imagem={item.idProdutoNavigation.foto}
                                nome={item.idProdutoNavigation.nome}
                                preco={item.idProdutoNavigation.preco}
                            />
                            : null
                        )}
                    />

                    <FooterContainer>

                        <TextContainerCart>
                            <TitleVerde>TOTAL: <CardPreco> R$: {total} </CardPreco> </TitleVerde>
                        </TextContainerCart>

                        <ButtonGreenCart onPress={() => setShowModalConfirmar(true)}>
                            <TextButtonVerdeCart>Finalize sua encomenda</TextButtonVerdeCart>
                        </ButtonGreenCart>

                    </FooterContainer>
                </>) : <ActivityIndicator />}

            <ModalRetirar
                visible={showModalCancelar}
                setShowModalCancelar={setShowModalCancelar}
                carrinho={pCarrinhoSelecionado}
            />

            <ModalEncomenda
                token={token}
                setShowModalConfirmar={setShowModalConfirmar}
                visible={showModalConfirmar}
                navigation={navigation}
            />

        </Container>
    );
};