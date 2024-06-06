import { View } from "react-native";
import { BoxCard, CardTextContainer } from "../../container/style";
import { CardContainer } from "./style";
import { CardImage } from "../../images/style";
import { CardData, CardName, CardStatus } from "../../title/style";

export const Card = ({
name,
status,
precoProduto,
dataEncomenda,
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

                   <CardStatus>Status: {status}</CardStatus>

                   <CardData>Data: {dataEncomenda}</CardData>

                </CardTextContainer>
            </BoxCard>
        </CardContainer>
    )
}
