import { Container } from "../../components/container/style"
import { Header } from "../../components/header/style"
import { ProfilePic } from "../../components/images/profilepic/style"
import { TitleVerde, TitleVerdeE } from "../../components/title/style"

export const Profile = () => {
    return (
        <Container> 
            <Header />
            <ProfilePic />
            <TitleVerde>Elza Lucia</TitleVerde>

            <TitleVerde>Minhas Encomendas:</TitleVerde>
            
        </Container>

    )
}