import { useState } from "react"
import { ButtonVerde } from "../../components/button/style"
import CodeInput from "../../components/codeInput/codeInput"
import { Container } from "../../components/container/style"
import { Logo } from "../../components/images/style"
import { InputLinhaVerde } from "../../components/input/style"
import { LinkRosa, LinkRosaCod, LinkRosaReenviar, TextoCinzaCod, TextoQuicksandMedium } from "../../components/text/style"
import { TextButtonVerde } from "../../components/textbutton/style"
import { TitleVerde } from "../../components/title/style"
import api from "../../services/services"
import { ActivityIndicator, StatusBar, TouchableOpacity } from "react-native"


export const CodigoRecuperarSenha = ({ navigation, route }) => {

    const [code, setCode] = useState("");

    const [loading, setLoading] = useState(false);


    async function validateRecoveryCode() {
        try {

            setLoading(true)

            await api.post(
                `/RecuperarSenha/ValidarCodigo?email=${route.params.emailRecuperacao}&codigo=${code}`
            );

            navigation.replace("atualizarSenha", {
                emailRecuperacao: route.params.emailRecuperacao,
            });

            setLoading(false)
            
        } catch (error) {

            Alert.alert(
                'Erro ao prosseguir !!',
                'Código incorreto !!!',
                [
                    { text: 'Ok' },
                ]
            );

            setLoading(false)
            console.log(error, email);
        }
    }

    async function resendCode() {
        try {
            await api.post(`/RecuperarSenha?email=${route.params.emailRecuperacao}`);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Container>

            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />

            <Logo
                source={require('../../assets/img/logo-removebg-preview 2Logo_Floralia (1) 1.png')}
            />

            <TitleVerde>Envío do código</TitleVerde>

            <TextoCinzaCod>
                Enviamos um código ao seu e-mail,
                digite-o abaixo para prosseguir !
            </TextoCinzaCod>

            <CodeInput value={code} setValue={setCode} />

            <ButtonVerde onPress={() => { validateRecoveryCode() }}>
                {loading ? <ActivityIndicator color={"#99004F"}/> : <TextButtonVerde>CONTINUAR</TextButtonVerde>}
            </ButtonVerde>

            <TouchableOpacity onPress={() => resendCode()}>
                <LinkRosaReenviar>Reenviar código</LinkRosaReenviar>
            </TouchableOpacity>


        </Container>)
}