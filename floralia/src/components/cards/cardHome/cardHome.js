import { TouchableOpacity } from "react-native"
import { ContainerCardHome, ContainerDescription } from "../../container/style"
import { ImageProduct } from "../../images/style"
import { TextNameProduct, TextPrice } from "../../text/style"

export const CardHome = ({ nome, preco, imagem, onpressProduct }) => {

    return (
        <ContainerCardHome>
            <TouchableOpacity onPress={onpressProduct}>
                <ImageProduct source={{ uri: imagem }} />
            </TouchableOpacity>
            

            <ContainerDescription>
                <TextNameProduct>{nome.length > 14 ? nome.substring(0, 14) + "..." : nome}</TextNameProduct>
                <TextPrice>R$: {preco}</TextPrice>
            </ContainerDescription>
        </ContainerCardHome>
    )
}