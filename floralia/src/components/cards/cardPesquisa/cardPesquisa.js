import { View } from "react-native";
import { BoxCard, CardTextContainer } from "../../container/style";
import { CardImage } from "../../images/style";
import { CardData, CardName, CardPreco } from "../../title/style";
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
                    <CardPreco>{precoProduto}</CardPreco>

                    <CardPreco>
                        3x <CardData>de </CardData>
                        <CardPreco>
                            ${!isNaN(parseFloat(valor)) ? (parseFloat(valor) / 3).toFixed(2).replace('.', ',') : '00,00'}
                        </CardPreco>
                        <CardData> sem juros</CardData>
                    </CardPreco>

                </CardTextContainer>
            </BoxCard>
        </CardContainer>
    )
}
