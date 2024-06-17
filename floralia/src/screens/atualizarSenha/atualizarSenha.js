import { useState } from "react";
import { ButtonVerde } from "../../components/button/style";
import { Container } from "../../components/container/style";
import { Logo, LogoAtualizar } from "../../components/images/style";
import { InputLinhaVerde } from "../../components/input/style";
import {
  TextInputVerde,
  TextoQuicksandMedium,
} from "../../components/text/style";
import { TextButtonVerde } from "../../components/textbutton/style";
import { TitleVerde } from "../../components/title/style";
import { ViewSpace10px, ViewSpace15px, ViewSpaceTop } from "../../components/views/style";
import { InputLinha, InputLinhaSenha } from "../../components/inputFunction/inputFunction";
import { ActivityIndicator, Alert, StatusBar } from "react-native";
import api from "../../services/services";

export const AtualizarSenha = ({ navigation, route }) => {

  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [secure, setSecure] = useState(true);

  const [loading, setLoading] = useState(false);


  async function changePassword() {
    if (senha !== confirmarSenha) {

      setLoading(true)

      Alert.alert(
        'Erro ao prosseguir !!',
        'A senha e sua confirmação não são iguais !!!',
        [
          { text: 'Ok' },
        ]
      );

      setLoading(false)
    }
    else {

      setLoading(true)

      await api.put(`/Usuario/AlterarSenha?email=${route.params.emailRecuperacao}`, {
          senhaNova: senha,
        })
        .then(() => {
          navigation.replace("Main");
          setLoading(false)
        })
        .catch((error) => {
          console.log(error);

          Alert.alert(
            'Erro ao prosseguir !!',
            'Por favor preencha o campo !!!',
            [
              { text: 'Ok' },
            ]
          );

          setLoading(false)
          // console.log(
          //   `$/Usuario/AlterarSenha?email=${route.params.emailRecuperacao}`
          // );
        });
    }
  }



  return (
    <Container>

      {/* <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        /> */}

      <ViewSpaceTop></ViewSpaceTop>

      <LogoAtualizar source={require('../../assets/img/logo-removebg-preview 2Logo_Floralia (1) 1.png')} />

      <TitleVerde>Atualizar senha</TitleVerde>

      <ViewSpace15px></ViewSpace15px>

      <TextoQuicksandMedium>
        Insira e confirme sua nova senha abaixo !
      </TextoQuicksandMedium>

      <InputLinhaSenha
        onPress={() => { secure ? setSecure(false) : setSecure(true) }}
        value={senha}
        onChangeText={text => setSenha(text)}
        secureTextEntry={secure}
        placeholder="Senha"
      />

      {/* <ViewSpace10px></ViewSpace10px> */}

      <InputLinhaSenha
        onPress={() => { secure ? setSecure(false) : setSecure(true) }}
        value={confirmarSenha}
        onChangeText={text => setConfirmarSenha(text)}
        secureTextEntry={secure}
        placeholder="Confirmar Senha"
      />

      {/* <ViewSpace10px></ViewSpace10px> */}

      <ButtonVerde
        onPress={() => {
          changePassword();
          senha, confirmarSenha != null
            ? changePassword()
            : Alert.alert(
              'Erro ao prosseguir !!',
              'Por favor preencha o campo !!!',
              [
                { text: 'Ok' },
              ]
            );
        }}
      >
        {loading ? <ActivityIndicator color={"#99004F"} /> : <TextButtonVerde>CONFIRMAR</TextButtonVerde>}
      </ButtonVerde>

    </Container>
  );
}

