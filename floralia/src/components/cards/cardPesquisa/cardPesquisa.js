import { View } from "react-native";
import { BoxCard, CardTextContainer } from "../../container/style";
import { CardImage } from "../../images/style";
import { CardData, CardDataBlack, CardName } from "../../title/style";
import { CardContainer } from "../cardsEncomenda/style";

export const CardPesquisa = ({
    name,
    precoProduto,
    valor,
}) => {

    return (
        <CardContainer
            onPress={() => {
                setShowModalAppo(true)

            }}>
            <BoxCard>
                <CardImage
                // source={{ uri: url }} 
                />

                <CardTextContainer>

                    <CardName>{name}</CardName>
                    <CardData>R$: {precoProduto}</CardData>
                    <CardData>3x <CardDataBlack>de <CardData>{valor}</CardData> sem juros</CardDataBlack></CardData>

                </CardTextContainer>
            </BoxCard>
        </CardContainer>
    )
}
