import { useState } from "react";
import { ButtonVerde } from "../../components/button/style";
import { Container } from "../../components/container/style";
import { Logo, LogoCadastro } from "../../components/images/style";
import { InputLinhaVerde } from "../../components/input/style";
import { LinkRosa, LinkRosaCod, TextInputVerde } from "../../components/text/style";
import { TextButtonVerde } from "../../components/textbutton/style";
import { TitleVerde } from "../../components/title/style";
import { ViewSpace10px, ViewSpaceTop } from "../../components/views/style";
import { InputLinha, InputLinhaSenha } from "../../components/inputFunction/inputFunction";
import api from "../../services/services";
import { ActivityIndicator, Alert, StatusBar, TouchableOpacity } from "react-native";

export const cadastro = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [nome, setNome] = useState('');

  const [secure, setSecure] = useState(true);

  const [loading, setLoading] = useState(false);


  const handleCadastro = async () => {

    setLoading(true);

    try {

      if (senha === confirmarSenha && senha.length >= 4) {

        const form = new FormData()

        form.append("nome", `${nome}`);
        form.append("email", `${email}`);
        form.append("senha", `${senha}`);

        const response = await api.post('/Usuario', form, {

          headers: {
            "Content-Type": "multipart/form-data"
          }

        }

        );

        if (response.data.success) {
          throw new Error('Yeah');
        }

        setLoading(false)

        navigation.replace("Login");


      } else {

        Alert.alert(
          'Erro ao efetuar o cadastro !!',
          'As senhas não coincidem, a senha precisa ter 4 digitos ou mais !!!',
          [
            { text: 'Ok' },
          ]
        );

        setLoading(false)

      }
    } catch (error) {

      // if (error.response) {
      //     setLoading(false)
      //     console.error('Erro ao cadastrar:', error.response.data);
      // } else if (error.request) {
      //     console.error('Erro de requisição:', error.request);
      //     setLoading(false)
      // } else {
      //     console.error('Erro ao configurar:', error.message);
      //     setLoading(false)
      // }

      setLoading(false)
      console.log('caiu no catch', error);

    }
  };


  return (

    <Container>

      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <ViewSpaceTop></ViewSpaceTop>

      <LogoCadastro source={require("../../assets/img/logoFloralia.png")} />

      <TitleVerde>Cadastro</TitleVerde>

      <InputLinha
        value={nome}
        onChangeText={text => setNome(text)}
        placeholder="Nome"
      />

      <ViewSpace10px></ViewSpace10px>

      <InputLinha
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Email"
      />

      <ViewSpace10px></ViewSpace10px>

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
        placeholder="Senha"
      />

      {/* <ViewSpace10px></ViewSpace10px> */}

      <ButtonVerde onPress={() => handleCadastro()}>
        {loading ? <ActivityIndicator color={"#99004F"}/> : <TextButtonVerde>CADASTRAR</TextButtonVerde>}
      </ButtonVerde>

      <ViewSpace10px></ViewSpace10px>

      <TouchableOpacity onPress={() => { navigation.replace("Login") }}>
        <LinkRosaCod>Cancelar</LinkRosaCod>
      </TouchableOpacity>

    </Container>
  );
};
