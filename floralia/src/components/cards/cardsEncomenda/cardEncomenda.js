import { View } from "react-native";
import { BoxCard, CardTextContainer, ContainerIcon } from "../../container/style";
import { CardContainer } from "./style";
import { CardImage } from "../../images/style";
import { CardData, CardName, CardStatus } from "../../title/style";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { BackgroundIcon, BackgroundIconGreen, BackgroundIconProfile } from "../../button/style";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

export const Card = ({
    name,
    status,
    precoProduto,
    dataEncomenda,
}) => {

    const [cancelarEncomenda, setCancelarEncomenda] = useState()


    async function CancelarEncomenda() {

        await api.put(`/Encomenda?id=${token.idUsuario}`).then(response => {

            setCancelarEncomenda(response.data)
            console.log(response.data);

        }).catch(error => {
            console.log(error);
        })

    }

    const Check = () => {
        if (status === "Pendente") {
            return (

                <ContainerIcon>
                    <BackgroundIconProfile >

                        {/* <AntDesign name="close" size={24} color="#B80000" /> */}

                        <Ionicons name="close" size={20} color="#B80000" onPress={CancelarEncomenda()}  />

                    </BackgroundIconProfile>


                    <BackgroundIconGreen>
                        <FontAwesome6 name="check" size={18} color="#1C4B00" />
                    </BackgroundIconGreen>
                    
                </ContainerIcon>

            );
        } else if (status === "Retirado") {
            return (
                <></>

            );
        } else if (status === "Cancelado") {
            return (
                <></>
            );
        }
    };

    return (

        <CardContainer borderColor={
            status == "Pendente" ? "#1C4B00" : "#8C8A97"
        }>
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



