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

export const atualizarSenha = () => {

  const [senha, setSenha] = useState("");

  const handleSenha = () => {
    setSenha("");
  };

  const handleChangeSenha = (newText) => {
    setSenha(newText);
  };


  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleConfirmarSenha = () => {
    setConfirmarSenha("");
  };

  const handleChangeConfirmarSenha = (newText) => {
    setConfirmarSenha(newText);
  };

  return (
    <Container>

      <ViewSpaceTop></ViewSpaceTop>

      <LogoAtualizar source={require("../../assets/img/logoFloralia.png")} />

      <TitleVerde>Atualizar senha</TitleVerde>

      <ViewSpace15px></ViewSpace15px>

      <TextoQuicksandMedium>
        Insira e confirme sua nova senha abaixo !
      </TextoQuicksandMedium>

      <InputLinhaVerde
        value={senha}
        onFocus={handleSenha}
        onChangeText={handleChangeSenha}
        placeholder="Senha"
      />

      <ViewSpace10px></ViewSpace10px>

      <InputLinhaVerde
        value={confirmarSenha}
        onFocus={handleConfirmarSenha}
        onChangeText={handleChangeConfirmarSenha}
        placeholder="Confirmar Senha"
      />

      <ViewSpace10px></ViewSpace10px>

      <ButtonVerde>
        <TextButtonVerde>CONFIRMAR</TextButtonVerde>
      </ButtonVerde>
    </Container>
  );
};
