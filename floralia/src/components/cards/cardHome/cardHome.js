import { ContainerCardHome, ContainerDescription } from "../../container/style"
import { ImageProduct } from "../../images/style"
import { TextNameProduct, TextPrice } from "../../text/style"

export const CardHome = ({nome, preco, imagem}) => {

    return(
        <ContainerCardHome>
            <ImageProduct source={{uri: imagem}}/>

            <ContainerDescription>
                <TextNameProduct>{nome}</TextNameProduct>
                <TextPrice>R$: {preco}</TextPrice>
            </ContainerDescription>
        </ContainerCardHome>
    )
}