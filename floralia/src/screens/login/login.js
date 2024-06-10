import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Container, ViewNovoAqui } from "../../components/container/style";
import { InputLinhaVerde } from "../../components/input/style";
import {
  LinkRosa,
  LinkRosaConta,
  TextInputVerde,
  TextVerde,
} from "../../components/text/style";
import { TitleVerde } from "../../components/title/style";
import { ButtonVerde } from "../../components/button/style";
import { TextButtonVerde } from "../../components/textbutton/style";
import { Logo } from "../../components/images/style";
import api from "../../services/services";
import {
  ViewInputIcon,
  ViewLeft,
  ViewLinha,
  ViewSpaceBottom,
  ViewSpaceTop,
} from "../../components/views/style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

import {
  InputLinha,
  InputLinhaSenha,
} from "../../components/inputFunction/inputFunction";

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState("gui@email.com");
  const [senha, setSenha] = useState("12345");
  const [loading, setLoading] = useState(false);
  const [secure, setSecure] = useState(true);
  const [press, setPress] = useState(false);

  const handleEmail = () => {
    setEmail("");
  };

  const handleChangeEmail = () => {
    setEmail();
  };

  const handleSenha = () => {
    setSenha();
  };

  const handleChangeSenha = () => {
    setSenha();
  };

  const ForgotSenha = () => {
    navigation.navigate("recuperarSenha");
  };

  const LinkCadastro = () => {
    navigation.navigate("cadastro");
  };

  async function LoginFunct() {
    if (!email || !senha) {
      // Verifica se os campos de e-mail e senha estão preenchidos
      Alert.alert("Erro", "Por favor, preencha todos os campos."); // Exibe uma mensagem de erro se algum campo estiver vazio
      return;
    }

    // setShowSpinner(true);
    // setPress(true);

    try {
      const response = await api.post("/Login", { email, senha });
      await AsyncStorage.setItem("token", JSON.stringify(response.data));
      // navigation.navigate("Main");
      console.log(email);
      alert("logou");
    } catch (error) {
      console.log(error);
      alert(
        "Erro",
        "Erro ao fazer login. Por favor, verifique suas credenciais."
      ); // Exibe uma mensagem de erro em caso de falha no login
    }
    // finally {
    //     setPress(false);
    //     setShowSpinner(false);
    // }
  }

  return (
    <Container>
      <Logo
        source={require("../../assets/img/logo-removebg-preview 2Logo_Floralia (1) 1.png")}
      />
      <TitleVerde>Login</TitleVerde>

      <InputLinha
        value={email}
        onFocus={handleEmail}
        onChangeText={(event) => setEmail(event)}
        placeholder= {email}
      />

      <InputLinhaSenha
        onPress={() => {
          secure ? setSecure(false) : setSecure(true);
        }}
        value={senha}
        onFocus={handleSenha}
        onChangeText={(txt) => setSenha(txt)}
        secureTextEntry={secure}
        placeholder={senha}
      />

      <TouchableOpacity>
        <LinkRosa>Esqueceu sua senha?</LinkRosa>
      </TouchableOpacity>

      <ButtonVerde onPress={(e) => LoginFunct()}>
        <TextButtonVerde>ENTRAR</TextButtonVerde>
      </ButtonVerde>

      {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft }}> */}

      <ViewNovoAqui>
        <TextVerde>É novo aqui?</TextVerde>

        <TouchableOpacity>
          <LinkRosaConta>Crie sua conta agora!</LinkRosaConta>
        </TouchableOpacity>
      </ViewNovoAqui>

      {/* </View> */}
    </Container>
  );
};
