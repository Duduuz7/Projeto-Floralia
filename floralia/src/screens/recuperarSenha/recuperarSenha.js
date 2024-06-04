import { useState } from "react";
import { ButtonVerde } from "../../components/button/style";
import { Container } from "../../components/container/style";
import { Logo } from "../../components/images/style";
import { InputLinhaVerde } from "../../components/input/style";
import {
    LinkRosa,
  TextInputVerde,
  TextoQuicksandMedium,
} from "../../components/text/style";
import { TextButtonVerde } from "../../components/textbutton/style";
import { TitleVerde } from "../../components/title/style";
import { ViewSpace, ViewSpaceTop } from "../../components/views/style";
export const recuperarSenha = () => {

  const [email, setEmail] = useState("");

  const handleEmail = () => {
    setEmail("");
  };

  const handleChangeEmail = (newText) => {
    setEmail(newText);
  };

  return (
    <Container>

      <ViewSpaceTop></ViewSpaceTop>

      <Logo source={require("../../assets/img/logoFloralia.png")} />

      <TitleVerde>Recuperação de senha</TitleVerde>
      
      <ViewSpace></ViewSpace>

      <TextoQuicksandMedium>
        Digite abaixo seu email para receber o código de recuperação de senha !
      </TextoQuicksandMedium>


      <InputLinhaVerde
        value={email}
        onFocus={handleEmail}
        onChangeText={handleChangeEmail}
        placeholder="Email"
      />

      <ButtonVerde>
        <TextButtonVerde>CONTINUAR</TextButtonVerde>
      </ButtonVerde>

      <ViewSpace></ViewSpace>

      <LinkRosa>Cancelar</LinkRosa>
    </Container>
  );
};
