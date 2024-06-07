import { Text, Touchable, TouchableOpacity } from "react-native-web"
import { Line, Maps } from "./style"
import { InputLinhaVerde } from "../../components/input/style"
import { LinkRosa, TextInputVerde } from "../../components/text/style"
import { Container } from "../../components/container/style"
import { TitleVerde } from "../../components/title/style"
import { ButtonVerde } from "../../components/button/style"
import { ContainerModal, ModalContent } from "../../components/ModalTeste/style"
import { useState } from "react"
import { TitleButtonModal } from "../ModalEncomenda/StyledModalEncomenda"
export const Localization = () => {
    const [visibleModal, setVisibleModal] = useState(false);

    return (
        <Container>
            <Maps
                source={require('../../assets/img/Maps.png')}
            />
            <TitleVerde>Floralía</TitleVerde>

            <LinkRosa>Jardins, SP</LinkRosa>

            <InputLinhaVerde>
                <TextInputVerde>Cidade Jardins, 1206</TextInputVerde>
            </InputLinhaVerde>
            <Line></Line>
        </Container>
    )
}

