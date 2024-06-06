import { TouchableOpacity } from "react-native"
import { Container } from "../../components/container/style"
import { InputLinhaVerde } from "../../components/input/style"
import { LinkRosa, TextInputVerde, TextVerde } from "../../components/text/style"
import { TitleVerde } from "../../components/title/style"
import { ButtonVerde } from "../../components/button/style"
import { TextButtonVerde } from "../../components/textbutton/style"
import { Logo } from "../../components/images/style"

export const Login = () => {
    return (
        <Container>
            <Logo
                source={require('../../assets/img/logo-removebg-preview 2Logo_Floralia (1) 1.png')}
            />
            <TitleVerde>Login</TitleVerde>
            <InputLinhaVerde>
                <TextInputVerde>E-mail</TextInputVerde>
            </InputLinhaVerde>
            <InputLinhaVerde>
                <TextInputVerde>Senha</TextInputVerde>
            </InputLinhaVerde>

            <TouchableOpacity>

                <LinkRosa>Esqueceu sua senha?</LinkRosa>

            </TouchableOpacity>
            <ButtonVerde>
                <TextButtonVerde>ENTRAR</TextButtonVerde>
            </ButtonVerde>

            <TextVerde>É novo aqui? <TouchableOpacity>

                <LinkRosa>Crie sua conta agora!</LinkRosa>
            </TouchableOpacity>
            </TextVerde>


        </Container>
    )
}