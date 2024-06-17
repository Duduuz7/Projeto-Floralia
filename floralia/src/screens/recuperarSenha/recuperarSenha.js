import { useState } from "react";
import { ButtonVerde } from "../../components/button/style";
import { Container } from "../../components/container/style";
import { Logo, LogoRecuperar } from "../../components/images/style";
import { InputLinhaVerde } from "../../components/input/style";
import {
  LinkRosa,
  LinkRosaCod,
  TextInputVerde,
  TextoQuicksandMedium,
} from "../../components/text/style";
import { TextButtonVerde } from "../../components/textbutton/style";
import { TitleVerde } from "../../components/title/style";
import { ViewSpace, ViewSpaceTop } from "../../components/views/style";
import { ActivityIndicator, Alert, StatusBar, TouchableOpacity } from "react-native";
import api from "../../services/services";



export const RecuperarSenha = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);


  async function sendEmail() {
    try {

      setLoading(true)

      await api.post(`/RecuperarSenha?email=${email}`);

      navigation.replace("codigoRecuperarSenha", { emailRecuperacao: email });

      setLoading(false)

    } catch (error) {

      console.log(error);

      Alert.alert(
        'Erro ao prosseguir !!',
        'Preencha o campo de email com o seu email para prosseguir !!!',
        [
          { text: 'Ok' },
        ]
      );

      setLoading(false);

    }
  }


  return (
    <Container>

      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <ViewSpaceTop></ViewSpaceTop>

      <LogoRecuperar source={require('../../assets/img/logo-removebg-preview 2Logo_Floralia (1) 1.png')} />

      <TitleVerde>Recuperação de senha</TitleVerde>

      <ViewSpace></ViewSpace>

      <TextoQuicksandMedium>
        Digite abaixo seu email para receber o código de recuperação de senha !
      </TextoQuicksandMedium>


      <InputLinhaVerde
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
      />

      <ButtonVerde onPress={
        () => {
          email != null
            ? sendEmail()
            : Alert.alert(
              'Erro ao prosseguir !!',
              'Preencha o campo de email !!!',
              [
                { text: 'Ok' },
              ]
            );
        }
      }>
        {loading ? <ActivityIndicator color={"#99004F"}/> : <TextButtonVerde>CONTINUAR</TextButtonVerde>}
      </ButtonVerde>

      <ViewSpace></ViewSpace>

      <TouchableOpacity onPress={() => { navigation.replace("Main") }}>
        <LinkRosaCod>Cancelar</LinkRosaCod>
      </TouchableOpacity>

    </Container>
  );
};
