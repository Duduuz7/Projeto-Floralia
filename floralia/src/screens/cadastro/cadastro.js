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

export const cadastro = () => {

  const [nome, setNome] = useState('');

  const [secure, setSecure] = useState(true);

  const handleNome = () => {
    setNome('');
  };

  const handleChangeNome = (newText) => {
    setNome(newText);
  };


  const [email, setEmail] = useState('');

  const handleEmail = () => {
    setEmail('');
  };

  const handleChangeEmail = (newText) => {
    setEmail(newText);
  };


  const [senha, setSenha] = useState('');

  const handleSenha = () => {
    setSenha('');
  };

  const handleChangeSenha = (newText) => {
    setSenha(newText);
  };


  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleConfirmarSenha = () => {
    setConfirmarSenha('');
  };

  const handleChangeConfirmarSenha = (newText) => {
    setConfirmarSenha(newText);
  };

  return (
    <Container>
      <ViewSpaceTop></ViewSpaceTop>

      <LogoCadastro source={require("../../assets/img/logoFloralia.png")} />

      <TitleVerde>Cadastro</TitleVerde>

      <InputLinha
        value={nome}
        onFocus={handleNome}
        onChangeText={handleChangeNome}
        placeholder="Nome"
      />
       
     

      <ViewSpace10px></ViewSpace10px>

      <InputLinha
        value={email}
        onFocus={handleEmail}
        onChangeText={handleChangeEmail}
        placeholder="Email"
      />

      <ViewSpace10px></ViewSpace10px>

      <InputLinhaSenha
        onPress={() => { secure ? setSecure(false) : setSecure(true) }}
        value={senha}
        onFocus={handleSenha}
        onChangeText={handleChangeSenha}
        secureTextEntry={secure}
        placeholder="Senha"
      />

      {/* <ViewSpace10px></ViewSpace10px> */}

      <InputLinhaSenha
        onPress={() => { secure ? setSecure(false) : setSecure(true) }}
        value={senha}
        onFocus={handleSenha}
        onChangeText={handleChangeSenha}
        secureTextEntry={secure}
        placeholder="Senha"
      />

      {/* <ViewSpace10px></ViewSpace10px> */}

      <ButtonVerde>
        <TextButtonVerde>CADASTRAR</TextButtonVerde>
      </ButtonVerde>

      <ViewSpace10px></ViewSpace10px>

      <LinkRosaCod>Cancelar</LinkRosaCod>

    </Container>
  );
};
