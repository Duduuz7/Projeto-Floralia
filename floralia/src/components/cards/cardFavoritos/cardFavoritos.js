import { View } from "react-native";
import { BoxCard, CardContainerItem, CardTextContainer } from "../../container/style";
import { CardImage } from "../../images/style";
import { CardData, CardName, CardPreco } from "../../title/style";
import { CardContainer } from "../cardsEncomenda/style";
import { BackgroundIcon } from "../../button/style";
import { Ionicons } from '@expo/vector-icons';

export const CardProduto = ({
    name,
    precoProduto,
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

                {/* <CardContainerItem> */}

                    <CardTextContainer>

                        <CardName>{name}</CardName>


                        <CardPreco>R$: {precoProduto}</CardPreco>

                    </CardTextContainer>

                    <BackgroundIcon>
                        <Ionicons name="heart-dislike-outline" size={26} color="#B83B5E"  />
                    </BackgroundIcon>

                {/* </CardContainerItem> */}

            </BoxCard>
        </CardContainer>
    )
}
