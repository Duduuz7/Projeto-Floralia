import { ButtonVerde } from "../../components/button/style";
import { Container } from "../../components/container/style";
import { Logo } from "../../components/images/style";
import { InputLinhaVerde } from "../../components/input/style";
import {
    LinkRosa,
  LinkRosaCod,
  TextInputVerde,
  TextoQuicksandMedium,
} from "../../components/text/style";
import { TextButtonVerde } from "../../components/textbutton/style";
import { TitleVerde } from "../../components/title/style";
export const recuperarSenha = () => {
  return (
    <Container>
      <Logo source={require("../../assets/img/logoFloralia.svg")} />

      <TitleVerde>Recuperação de senha</TitleVerde>

      <TextoQuicksandMedium>
        Deigite abaixo seu email para receber o código de rcuperação de senha !
      </TextoQuicksandMedium>

      <InputLinhaVerde>
        <TextInputVerde>E-mail</TextInputVerde>
      </InputLinhaVerde>

      <ButtonVerde>
        <TextButtonVerde>CONTINUAR</TextButtonVerde>
      </ButtonVerde>

      <LinkRosaCod>Cancelar</LinkRosaCod>
    </Container>
  );
};
