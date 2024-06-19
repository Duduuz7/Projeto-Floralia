import { ActivityIndicator, View } from "react-native"
import { Container, FlatContainer, HrProfile } from "../../components/container/style"
import { Header } from "../../components/header/style"
import { LogoHeader } from "../../components/images/style"
import { TitleVerde } from "../../components/title/style"
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from "react"
// import { CardProduto } from "../../components/cards/cardFavoritos/cardFavoritos"
import api from "../../services/services"
import { userDecodeToken } from "../../utils/auth"
import { HeaderComponent } from "../../components/header/header"
import { CardProduto } from "../../components/cards/cardFavoritos/cardFavoritos"
import { useFocusEffect } from "@react-navigation/native"

export const Favoritos = ({ navigation }) => {

    const [listaFavoritos, setListaFavoritos] = useState([])

    const [token, setToken] = useState({})
    const [verdadeiro, setTrue] = useState(false)


    async function ProfileLoad() {
        const tokenDecode = await userDecodeToken();

        if (tokenDecode) {
            console.log('token');
            setToken(tokenDecode)


            async function ListarFavoritos(tokenDecode) {
                // console.log(`/Favorito/BuscarPorIdUsuario?id=${user}`);
                await api.get(`/Favorito/BuscaPorIdUsuario?idUsuario=${tokenDecode.user}`).then(response => {
        
                    setListaFavoritos(response.data)
                    // console.log(response.data);
        
                }).catch(error => {
                    console.log(error);
                })
        
            }


            ListarFavoritos(tokenDecode)
            console.log(tokenDecode.user);


        }
    }

  
    useFocusEffect(React.useCallback(() => {
        ProfileLoad()
    }, [verdadeiro]))










    return (
        <Container>

            <HeaderComponent navigation={navigation} />

            <TitleVerde>Favoritos</TitleVerde>

            <FlatContainer
                keyExtractor={(item) => item.id}
                data={listaFavoritos}
                renderItem={({ item }) => (
                    <CardProduto
                        verdadeiro={verdadeiro}
                        setTrue={setTrue}
                        navigation={navigation}
                        idFavorito={item.id}
                        imagem={item.idProdutoNavigation.foto}
                        nome={item.idProdutoNavigation.nome}
                    />
                )}
            />

            <HrProfile />

        </Container>

    )
}