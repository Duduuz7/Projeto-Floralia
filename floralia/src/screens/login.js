import { TouchableOpacity } from "react-native"
import { Container } from "../components/container/style"
import { InputLinhaVerde } from "../components/input/style"
import { LinkRosa, TextInputVerde } from "../components/text/style"
import { TitleVerde } from "../components/title/style"
import { ButtonVerde } from "../components/button/style"

export const Login = () => {
    return(
        <Container>
            <TitleVerde>Login</TitleVerde>
            <InputLinhaVerde>
                <TextInputVerde>E-mail</TextInputVerde>
            </InputLinhaVerde>
            <InputLinhaVerde>
                <TextInputVerde>Senha</TextInputVerde>
            </InputLinhaVerde>

            <TouchableOpacity>

            <LinkRosa>aaaa</LinkRosa>

            </TouchableOpacity>
            <ButtonVerde></ButtonVerde>
        </Container>
    )
}