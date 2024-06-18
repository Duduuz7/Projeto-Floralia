import { View } from "react-native";
import { BoxCard, CardTextContainer, ContainerIcon } from "../../container/style";
import { CardContainer } from "./style";
import { CardImage } from "../../images/style";
import { CardData, CardName, CardStatus } from "../../title/style";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { BackgroundIcon, BackgroundIconGreen } from "../../button/style";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

export const Card = ({
    name,
    status,
    encomenda,
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
        if (status == 1) {
            return (

                <ContainerIcon>
                    <BackgroundIcon >

                        {/* <AntDesign name="close" size={24} color="#B80000" /> */}

                        <Ionicons name="close" size={20} color="#B80000" onPress={CancelarEncomenda()}  />

                    </BackgroundIcon>


                    <BackgroundIconGreen>
                        <FontAwesome6 name="check" size={18} color="#1C4B00" />
                    </BackgroundIconGreen>
                    
                </ContainerIcon>

            );
        } else if (status == 2) {
            return (
                <></>

            );
        } else if (status == 3) {
            return (
                <></>
            );
        }
    };

    return (

        <CardContainer borderColor={
            status == 1 ? "#1C4B00" : "#8C8A97"
        }>
            <BoxCard>
                {/* <CardImage /> */}

                <CardTextContainer>

                    if (status == 1) {
                        <CardName>{encomenda.idProdutoNavigation.nome}</CardName>

                    }else{
                        <CardNameStatus>
                            {encomenda.idProdutoNavigation.nome}
                        </CardNameStatus>
                    }


                    <CardStatus>Status: {status}</CardStatus>

                    {/* <CardData>Data: {dataEncomenda}</CardData> */}

                </CardTextContainer>

                {Check()}

            </BoxCard>

        </CardContainer>

    );
};