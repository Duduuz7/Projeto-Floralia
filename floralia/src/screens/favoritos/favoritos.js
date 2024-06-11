import { ActivityIndicator, View } from "react-native"
import { Container, FlatContainer, HrProfile } from "../../components/container/style"
import { Header } from "../../components/header/style"
import { LogoHeader } from "../../components/images/style"
import { TitleVerde } from "../../components/title/style"
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from "react"
import { CardProduto } from "../../components/cards/cardFavoritos/cardFavoritos"
import { userDecodeToken } from "../../utils/Auth"
import api from "../../services/services"


export const Favoritos = ({ navigation }) => {

    const [listaFavoritos, setListaFavoritos] = useState([])

    const [token, setToken] = useState({})

    async function ProfileLoad() {
        const tokenDecode = await userDecodeToken();

        if (tokenDecode != null) {
            setToken(tokenDecode)

            ListarFavoritos(tokenDecode.user)
        }
    }

    useEffect(() => {
        ProfileLoad();
    }, []);

    async function ListarFavoritos(user) {
        console.log(`/Favorito/BuscarPorIdUsuario?id=${user}`);
        await api.get(`/Favorito/BuscaPorIdUsuario?idUsuario=${user}`).then(response => {

            setListaFavoritos(response.data)
            // console.log(response.data);

        }).catch(error => {
            console.log(error);
        })

    }



    //passar o idProduto pelo modal
    async function AdicionarFavorito(){
        await api.post(`/Favorito`, {idUsuario:token.user, idProduto:idProduto}).then(response => {

            
            console.log(response.data);

        }).catch(error => {
            console.log(error);
        })
    }



    //passar os Ids pelo modal
    async function CriarEncomenda(){
        await api.post(`/Encomenda`, {idUsuario:token.user, idProduto:idProduto, statusEncomenda:statusEncomenda, dataEncomenda:dataEncomenda}).then(response => {

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

                <LogoHeader
                    source={require('../../assets/img/logo-removebg-preview 2Logo_Floralia (1) 1.png')}
                />

                <View style={{ marginRight: 14 }}>
                    <MaterialCommunityIcons name="cart-outline" size={28} color="#B83B5E" margin-left="12px" onPress={() => navigation.navigate("Carrinho")} />
                </View>

            </Header>

            <TitleVerde>Favoritos</TitleVerde>

            <FlatContainer
                keyExtractor={(item) => item.id}
                data={listaFavoritos}
                renderItem={({ item }) => (
                    <CardProduto
                        navigation={navigation}
                        name={item.Nome}
                        idFavorito={item.id}
                        status={item.status}
                        precoProduto={item.precoProduto}
                    />
                )}
            />

            <HrProfile />

        </Container>

    )
}