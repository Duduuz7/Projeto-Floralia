import { useState } from "react"
import { ButtonVerde } from "../../components/button/style"
import CodeInput from "../../components/codeInput/codeInput"
import { Container } from "../../components/container/style"
import { Logo } from "../../components/images/style"
import { InputLinhaVerde } from "../../components/input/style"
import { LinkRosa, LinkRosaCod, TextoCinzaCod, TextoQuicksandMedium } from "../../components/text/style"
import { TextButtonVerde } from "../../components/textbutton/style"
import { TitleVerde } from "../../components/title/style"


export const CodigoRecuperarSenha = () => {


    const [value, setValue] = useState('')


    return (
        <Container>
            <Logo
                source={require('../../assets/img/logo-removebg-preview 2Logo_Floralia (1) 1.png')}
            />
            <TitleVerde>Envío do código</TitleVerde>

            <TextoCinzaCod>
                Enviamos um código ao seu e-mail,
                digite-o abaixo para prosseguir !
            </TextoCinzaCod>

            <CodeInput value={value} setValue={setValue}/>

            <ButtonVerde>
                <TextButtonVerde>CONTINUAR</TextButtonVerde>
            </ButtonVerde>

            <LinkRosaCod>Reenviar código</LinkRosaCod>


        </Container>)
}