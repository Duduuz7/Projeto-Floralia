import { Text, Touchable, TouchableOpacity, View } from "react-native"
import { Line } from "./style"
import Maps from "../../components/Maps/Maps";
import { InputLinhaVerde } from "../../components/input/style"
import { LinkRosa, TextInputVerde } from "../../components/text/style"
import { Container } from "../../components/container/style"
import { TitleVerde } from "../../components/title/style"

import { useState } from "react"
// import { TitleButtonModal } from "../ModalEncomenda/StyledModalEncomenda"
// import { HeaderProfile } from "../../components/header/style"
// import { LogoHeader } from "../../components/images/style"
// import { Ionicons } from '@expo/vector-icons';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HeaderComponent } from "../../components/header/header";

export const Localization = ({ navigation }) => {
    const [visibleModal, setVisibleModal] = useState(false);

    return (
        <Container>
            <HeaderComponent navigation={navigation}/>

            <Maps
              latitude={-23.5787632} longitude={-46.6819245}
            />

            <TitleVerde>Floralía</TitleVerde>

            {/* <LinkRosa>Jardins, SP</LinkRosa> */}

            <InputLinhaVerde>
                <TextInputVerde>Cidade Jardins, 1206</TextInputVerde>
            </InputLinhaVerde>
            <Line></Line>
        </Container>
    )
}

