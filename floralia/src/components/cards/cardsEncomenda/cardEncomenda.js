import { View } from "react-native";
import { BoxCard, CardTextContainer } from "../../container/style";
import { CardContainer } from "./style";
import { CardImage } from "../../images/style";
import { CardData, CardName, CardStatus } from "../../title/style";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { BackgroundIcon, BackgroundIconGreen } from "../../button/style";
import { Ionicons } from '@expo/vector-icons';

export const Card = ({
    name,
    status,
    precoProduto,
    dataEncomenda,
}) => {

    const Check = () => {
        if (status === "Pendente") {
            return (

                <View style={{ marginTop: 24, marginLeft: 17 }}>
                    <BackgroundIcon>

                        {/* <AntDesign name="close" size={24} color="#B80000" /> */}

                        <Ionicons name="close" size={32} color="#B80000" />

                    </BackgroundIcon>
                </View >

            );
        } else if (status === "Retirado") {
            return (

                <View style={{ marginTop: 24, marginLeft: 17 }}>
                    <BackgroundIconGreen>
                        <FontAwesome6 name="check" size={24} color="#1C4B00" />
                    </BackgroundIconGreen>
                </View >

            );
        } else if (status === "Cancelado") {
            return (
                <></>
            );
        }
    };

    return (
        
        <CardContainer>
            <BoxCard>
                <CardImage />

                <CardTextContainer>

                    <CardName>{name}</CardName>

                    <CardStatus>Status: {status}</CardStatus>

                    <CardData>Data: {dataEncomenda}</CardData>

                </CardTextContainer>

                {Check()}



            </BoxCard>

        </CardContainer>

    );
};



