import { View } from "react-native"
import { Container } from "../../components/container/style"
import { Header, HeaderCarrinho } from "../../components/header/style"
import { LogoHeader, LogoHeaderCarrinho } from "../../components/images/style"
import { TitleVerde } from "../../components/title/style"
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HeaderComponent, HeaderComponentCarrinho } from "../../components/header/header"


export const Carrinho = () => {
    return (
        <Container>
            <HeaderComponentCarrinho/>

            <TitleVerde>Carrinho</TitleVerde>


        </Container>

    )
}