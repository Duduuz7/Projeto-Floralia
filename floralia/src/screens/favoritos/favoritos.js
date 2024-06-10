import { View } from "react-native"
import { Container, FlatContainer, HrProfile } from "../../components/container/style"
import { Header } from "../../components/header/style"
import { LogoHeader } from "../../components/images/style"
import { TitleVerde } from "../../components/title/style"
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from "react"
import { CardProduto } from "../../components/cards/cardFavoritos/cardFavoritos"


export const Favoritos = ({ navigation }) => {

    // const [favoritos, setFavoritos] = useState([
    //     { name: 'Buque de rosas', id: '1', status: 'Pendente', precoProduto: '389,90' },
    //     { name: 'Buque de flores', id: '2', status: 'Recebido', precoProduto: '389,90' },
    //     { name: 'Buque de lirios', id: '3', status: 'Cancelado', precoProduto: '389,90' },
    //     { name: 'Buque de lirios', id: '4', status: 'pendente', precoProduto: '389,90' },
    // ]);

    const [listaFavoritos, setListaFavoritos] = useState([]) 

    async function ListarFavoritos() {

        // console.log(`/Favorito/BuscarPorIdUsuario?id=${token.idUsuario}`);
        await api.get(`/Favorito/BuscarPorIdUsuario?id=${token.idUsuario}`).then(response => {

            setListaFavoritos(response.data)
            console.log(response.data);

        }).catch(error => {
            console.log(error);
        })

    }

    useEffect(()=> {
        ListarFavoritos();
    },[])

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
                data={ListarFavoritos()}
                renderItem={({ item }) => (
                    <CardProduto
                        navigation={navigation}
                        name={item.name}
                        status={item.status}
                        precoProduto={item.precoProduto}
                    />
                )}
            />

            <HrProfile />

        </Container>

    )
}