import { Feather } from '@expo/vector-icons';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { Container, ContainerProfile, FlatContainer, HrProfile } from '../../components/container/style';
import { HeaderProfile } from '../../components/header/style';
import { LogoHeader } from '../../components/images/style';
import { BackGroundIconCamera, BackgroundIcon, BackgroundIconCamera } from '../../components/button/style';
import { TitleName, TitleVerdeName, TitleVerdeProfile } from '../../components/title/style';

import { ProfilePic, ProfilePicContainer } from '../../components/images/profilepic/style';

//import dos icons
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { HeaderComponent } from '../../components/header/header';
import { Card } from '../../components/cards/cardsEncomenda/cardsEncomenda';
import api from '../../services/services';
import { useFocusEffect } from '@react-navigation/native';
import { userDecodeToken } from '../../utils/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CameraExpo } from '../../components/camera/camera';



export const Profile = ({ navigation }) => {

    const [token, setToken] = useState({})
    const [showCameraModal, setShowCameraModal] = useState(false);
    const [cameraCapture, setCameraCapture] = useState(null);
    const [baseUser, setBaseUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [photo, setPhoto] = useState(null); // mostrar a foto na busca do usuario
    const [photoCapture, setPhotoCapture] = useState(null); // Salvar a foto alterada
    const [listaCarrinho, setListaCarrinho] = useState([]);
    const [statusCarrinho, setStatusCarrinho] = useState();
    const [verdadeiro, setTrue] = useState(false)


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



    async function ProfileLoad() {
        const tokenDecode = await userDecodeToken();
        if (tokenDecode) {
            setToken(tokenDecode);
            console.log('token');

            await api.get(
                `/Usuario/BuscarPorId?idUsuario=${tokenDecode.user}`
            ).then(response => {
                console.log(response.data);
                setProfile(response.data)
                setBaseUser({ ...response.data });
                setPhoto(response.data.foto);
            }).catch(error => {
                console.log(error);
            })

            await api.get(`/Carrinho/BuscarPorUsuario?idUsuario=${tokenDecode.user}`).then(response => {

                setListaCarrinho(response.data);
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            })

        }



    }



    // Alterar a foto de perfil
    async function AlterarFotoPerfil() {
        const formData = new FormData();
        formData.append("File", {
            uri: photoCapture,
            name: `image.${photoCapture.split(".").pop()}`,
            type: `image/${photoCapture.split(".").pop()}`,
        });

        await api
            .put(`/Usuario/AlterarFotoPerfil?id=${baseUser.id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(() => {
                // Salva a foto alterada na visualizacao
                setPhoto(photoCapture)
            })
            .catch((error) => {
                console.log(error);

            });
    }

    // Monitora se houve uma nova foto informada
    useEffect(() => {
        AlterarFotoPerfil();
    }, [photoCapture])

    // useEffect(() => {
    //     ProfileLoad()
    // }, [verdadeiro, ])
    
    useFocusEffect(React.useCallback(() => {
        ProfileLoad()
    }, [verdadeiro,listaCarrinho]))


    // useFocusEffect(React.useCallback(() => {
    //     ProfileLoad()
    // }, []))

    // const [encomendas, setEncomendas] = useState([
    //     { name: 'Buque de rosas', id: '1', status: 'Pendente', dataEncomenda: '12/06' },
    //     { name: 'Buque de flores', id: '2', status: 'Retirado', dataEncomenda: '12/06' },
    //     { name: 'Buque de lirios', id: '3', status: 'Cancelado', dataEncomenda: '12/06' },
    // ]);

    return (
        // <ScrollView>
        <Container>
            {profile ?
                <>
                    <HeaderComponent navigation={navigation} />


                    <ProfilePicContainer>
                        <ProfilePic
                            source={{ uri: profile.foto }}
                        />

                        <BackgroundIconCamera>
                            <Feather name="camera" size={30} color="#99004F" />
                        </BackgroundIconCamera>

                    </ProfilePicContainer>



                    <ContainerProfile>

                        <TitleVerdeName style={{ textAlign: 'center' }}>{token.name}</TitleVerdeName>

                    </ContainerProfile>



                    <TitleVerdeProfile>Meus Produtos:</TitleVerdeProfile>

                    <FlatContainer
                        keyExtractor={(item) => item.id}
                        data={listaCarrinho}
                        renderItem={({ item }) => (
                            item.status != null ?
                            <Card
                                verdadeiro={verdadeiro}
                                setTrue={setTrue}
                                navigation={navigation}
                                id={item.id}
                                encomenda={item}
                                status={item.status}
                                dataEncomenda={item.dataEncomenda}
                            />
                            : null
                        )}

                    />


                    <HrProfile />
                </>

                : <ActivityIndicator />}


                        {/* Passa pro modal a responsabilidade de salvar no estado da foto alterada */}
        <CameraExpo
          setPhotoPag={setPhotoCapture}
          visible={showCameraModal}
          setShowCameraModal={setShowCameraModal}
          setCameraCapture={setCameraCapture}
        />

        </Container>



        // </ScrollView >
    )
}