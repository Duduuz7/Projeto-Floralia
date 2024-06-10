import { FlatList, ScrollView, View } from "react-native"
import { BackgroundIcon, Container, FlatContainer, HrProfile } from "../../components/container/style"
import { Header, HeaderProfile } from "../../components/header/style"
import { ProfilePic } from "../../components/images/profilepic/style"
import { CameraIcon, LogoHeader, MenuHamburguer } from "../../components/images/style"
import { TitleVerde, TitleVerdeProfile } from "../../components/title/style"
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from "react"
import { Card } from "../../components/cards/cardsEncomenda/cardsEncomenda"
import { Feather } from '@expo/vector-icons';

export const Profile = ({ navigation }) => {

    const [encomendas, setEncomendas] = useState([
        { name: 'Buque de rosas', id: '1', status: 'Pendente', dataEncomenda: '12/06' },
        { name: 'Buque de flores', id: '2', status: 'Recebido', dataEncomenda: '12/06'  },
        { name: 'Buque de lirios', id: '3', status: 'Cancelado', dataEncomenda: '12/06'  },
        { name: 'Buque de lirios', id: '4', status: 'pendente', dataEncomenda: '12/06'  },
    ]);

    // const [photo, setPhoto] = useState(null)
    // useEffect(() => {

    //     console.log(route);

    //     if (route.params !== null) {
    //         AlterarFotoPerfil()
    //     }


    // }, [route.params])



    // useEffect(() => {

    // }, [photo])

    return (
    <ScrollView>
        <Container>

            <HeaderProfile>

                <View style={{ marginLeft: 14 }}>
                    <Ionicons name="menu" size={40} color="#B83B5E" />
                </View>

                <LogoHeader
                    source={require('../../assets/img/logo-removebg-preview 2Logo_Floralia (1) 1.png')}
                />

                <View style={{ marginRight: 14 }}>
                    <MaterialCommunityIcons name="cart-outline" size={37} color="#B83B5E" margin-left="12px" onPress={() => navigation.navigate("Carrinho")}/>
                </View>

                {/* <MaterialCommunityIcons name="cart-remove" size={24} color="black" /> */}
            </HeaderProfile>

            <ProfilePic
            // source={{ uri: photo }}
            />
            <BackgroundIcon>
                <Feather name="camera" size={30} color="#99004F" />
            </BackgroundIcon>
            

            <TitleVerde>Elza Lucia</TitleVerde>

            <TitleVerdeProfile>Minhas Encomendas:</TitleVerdeProfile>

            
            <FlatContainer
                keyExtractor={(item) => item.id}
                data={encomendas}
                renderItem={({ item }) => (
                    <Card
                        navigation={navigation}
                        name={item.name}
                        status={item.status}
                        dataEncomenda={item.dataEncomenda}
                    />


                )}

            />


            <HrProfile/>

            
        </Container>
    </ScrollView>
    )
}