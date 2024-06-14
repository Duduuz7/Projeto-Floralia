import { Feather } from '@expo/vector-icons';
import { ScrollView, View } from 'react-native';
import { Container, ContainerProfile, FlatContainer, HrProfile } from '../../components/container/style';
import { HeaderProfile } from '../../components/header/style';
import { LogoHeader } from '../../components/images/style';
import { BackGroundIconCamera, BackgroundIcon, BackgroundIconCamera } from '../../components/button/style';
import { TitleName, TitleVerdeProfile } from '../../components/title/style';
import { Card } from '../../components/cards/cardsEncomenda/cardEncomenda';
import { ProfilePic, ProfilePicContainer } from '../../components/images/profilepic/style';

//import dos icons
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { useState } from 'react';


export const Profile = ({ navigation }) => {

    const [encomendas, setEncomendas] = useState([
        { name: 'Buque de rosas', id: '1', status: 'Pendente', dataEncomenda: '12/06' },
        { name: 'Buque de flores', id: '2', status: 'Retirado', dataEncomenda: '12/06' },
        { name: 'Buque de lirios', id: '3', status: 'Cancelado', dataEncomenda: '12/06' },
    ]);

    return (
        <ScrollView>
            <Container>

                <HeaderProfile>

                    <View style={{ marginLeft: 14 }}>
                        <Ionicons name="menu" size={30} color="#B83B5E" />
                    </View>

                    <LogoHeader
                        source={require('../../assets/img/logo-removebg-preview 2Logo_Floralia (1) 1.png')}
                    />

                    <View style={{ marginRight: 14 }}>
                        <MaterialCommunityIcons name="cart-outline" size={28} color="#B83B5E" margin-left="12px" onPress={() => navigation.navigate("Carrinho")} />
                    </View>

                    {/* <MaterialCommunityIcons name="cart-remove" size={24} color="black" /> */}

                </HeaderProfile>

                <ProfilePicContainer>
                    <ProfilePic
                    // source={{}}
                    />

                    <BackgroundIconCamera>
                        <Feather name="camera" size={30} color="#99004F" />
                    </BackgroundIconCamera>

                </ProfilePicContainer>



                <ContainerProfile>

                    <TitleName style={{ textAlign: 'center' }}>Elza Lucia</TitleName>


                    <MaterialCommunityIcons name="pencil-outline" size={24} color="#B83B5E" />

                </ContainerProfile>



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

                <HrProfile />

            </Container>
        </ScrollView >
    )
}