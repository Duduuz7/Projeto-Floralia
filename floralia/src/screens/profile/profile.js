import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import {
  BackgroundIcon,
  Container,
  FlatContainer,
  HrProfile,
} from "../../components/container/style";
import { Header, HeaderProfile } from "../../components/header/style";
import { ProfilePic } from "../../components/images/profilepic/style";
import {
  CameraIcon,
  LogoHeader,
  MenuHamburguer,
} from "../../components/images/style";
import { TitleVerde, TitleVerdeProfile } from "../../components/title/style";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Card } from "../../components/cards/cardsEncomenda/cardsEncomenda";
import { Feather } from "@expo/vector-icons";
import { CameraExpo } from "../../components/camera/camera";
import { Image } from "react-native";
import {
  ButtonCamera,
  ContainerFoto,
  ContainerLabel,
  TextButtonCamera,
  TextFoto,
  TextRed2,
} from "../../components/camera/style";
import { userDecodeToken } from "../../utils/auth";
import api from "../../services/services";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import * as MediaLibrary from "expo-media-library"
// import * as ImagePicker from "expo-image-picker"

export const Profile = ({ navigation, route }) => {
  const [encomendas, setEncomendas] = useState([
    {
      name: "Buque de rosas",
      id: "1",
      status: "Pendente",
      dataEncomenda: "12/06",
    },
    {
      name: "Buque de flores",
      id: "2",
      status: "Recebido",
      dataEncomenda: "12/06",
    },
    {
      name: "Buque de lirios",
      id: "3",
      status: "Cancelado",
      dataEncomenda: "12/06",
    },
    {
      name: "Buque de lirios",
      id: "4",
      status: "pendente",
      dataEncomenda: "12/06",
    },
  ]);

  const [token, setToken] = useState({})
  const [showCameraModal, setShowCameraModal] = useState(false);
  const [cameraCapture, setCameraCapture] = useState(null);
  const [baseUser, setBaseUser] = useState(null);
  const [nome, setNome] = useState(null);
  const [photo, setPhoto] = useState(null); // mostrar a foto na busca do usuario
  const [photoCapture, setPhotoCapture] = useState(null); // Salvar a foto alterada

  async function ProfileLoad() {
    const tokenDecode = await userDecodeToken();
    if (tokenDecode) {
      await setToken(tokenDecode);
      await BuscarUsuario(tokenDecode);
    }
  }

  async function BuscarUsuario(tokenUser) {
    try {
      const response = await api.get(
        `/Usuario/BuscarPorId?idUsuario=${tokenUser.jti}`
      );

      setBaseUser({ ...response.data });
      setPhoto(response.data.foto);
      setNome(response.data.nome)
      console.log(nome);

    } catch (error) {
      console.log(error);
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
        setPhoto( photoCapture )
      })
      .catch((error) => {
        console.log(error);

      });
  }

  async function SalvarFunction() {
    

   
        await api.put("/Medicos", {
            id: token.jti,
            cep: baseUser.endereco.cep,
            logradouro: baseUser.endereco.logradouro,
            numero: baseUser.endereco.numero,
            cidade: baseUser.endereco.cidade,
            crm: baseUser.crm,
            especialidade: baseUser.especialidade.id
        }).then( async(response) => {
            console.log(response.data);
            await ProfileLoad()
            navigation.navigate('Main')
        }).catch((error) => {
            console.log(error);
        })
  
    setEditing(false)
    setDesativarNavigation(false)
}

  // Monitora se houve uma nova foto informada
  useEffect(() => {
    AlterarFotoPerfil();
  }, [photoCapture])

  useEffect(() => {
    ProfileLoad();
    // console.log(route);
  }, [route]);

//   useEffect(() => {
//     if (route.params != null && baseUser) {
//         AlterarFotoPerfil()
//     }
//     console.log(route.params);
// }, [route, baseUser, photo])

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
            source={require("../../assets/img/logo-removebg-preview 2Logo_Floralia (1) 1.png")}
          />

          <View style={{ marginRight: 14 }}>
            <MaterialCommunityIcons
              name="cart-outline"
              size={37}
              color="#B83B5E"
              margin-left="12px"
              onPress={() => navigation.navigate("Carrinho")}
            />
          </View>

          {/* <MaterialCommunityIcons name="cart-remove" size={24} color="black" /> */}
        </HeaderProfile>

        <ProfilePic
          source={{ uri: photo }}
        />

        {/* <ContainerFoto>
          {cameraCapture == null ? (
            <>
              <MaterialCommunityIcons
                name="file-alert-outline"
                size={24}
                color="#4E4B59"
              />
              <TextFoto>Nenhuma foto informada</TextFoto>
            </>
          ) : (
            <>
              <Image
                style={{ width: "100%", height: 120, borderRadius: 5 }}
                source={{ uri: cameraCapture }}
              />
            </>
          )}
        </ContainerFoto> */}

        {/* <ContainerLabel>
          <ButtonCamera onPress={() => setShowCameraModal(true)}>
            <TextButtonCamera>
              <MaterialCommunityIcons
                name="camera-plus-outline"
                size={24}
                color="white"
              />
            </TextButtonCamera>
            <TextButtonCamera>enviar</TextButtonCamera>
          </ButtonCamera>
          <TextRed2 onPress={() => setCameraCapture(null)}>Cancelar</TextRed2>
        </ContainerLabel> */}

        <BackgroundIcon>
          <TouchableOpacity onPress={() => setShowCameraModal(true)}>
            <Feather name="camera" size={30} color="#99004F" />
          </TouchableOpacity>
        </BackgroundIcon>

        <TitleVerde>{nome}</TitleVerde>

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

        {/* Passa pro modal a responsabilidade de salvar no estado da foto alterada */}
        <CameraExpo
          setPhotoPag={setPhotoCapture}
          visible={showCameraModal}
          setShowCameraModal={setShowCameraModal}
          setCameraCapture={setCameraCapture}
        />
      </Container>
    </ScrollView>
  );
};
