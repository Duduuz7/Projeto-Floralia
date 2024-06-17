import { View } from "react-native";
import { BoxCard, CardContainerItem, CardTextContainer } from "../../container/style";
import { CardImage } from "../../images/style";
import { CardName, CardPreco } from "../../title/style";
import { CardContainer } from "../cardsEncomenda/style";
import { BackgroundIcon } from "../../button/style";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import api from "../../../services/services";
import { useState } from "react";
import { ModalRetirar } from "../../modalEncomenda/ModalCancelamento";

export const CardCarrinho = ({
    nome,
    imagem,
    preco,
    onPressCarrinho
}) => {




    return (
        <CardContainer borderColor={'#1C4B00'}
            onPress={() => {
                setShowModalAppo(true)

            }}>
            <BoxCard>
                <View style={{borderRightWidth: 2, borderColor: '#1C4B00'}}>
                    <CardImage
                        source={{ uri: imagem }}
                    />
                </View>

                {/* <CardContainerItem> */}

                <CardTextContainer>

                    <CardName>{nome}</CardName>


                    <CardPreco>R$: {preco}</CardPreco>

                </CardTextContainer>

                <View style={{ marginTop: 24 }}>
                    <BackgroundIcon onPress={onPressCarrinho}>
                        <MaterialCommunityIcons name="cart-remove" size={24} color="#B83B5E" />
                    </BackgroundIcon>
                </View >
                {/* </CardContainerItem> */}

            </BoxCard>
        </CardContainer>
    )
}
