import { ActivityIndicator, View } from "react-native";
import { BoxCard, CardTextContainer, CardTextContainerStatus, ContainerIcon } from "../../container/style";
import { CardContainer, CardContainerPerfil } from "./style";
import { CardImage } from "../../images/style";
import { CardData, CardName, CardNameStatus, CardStatus } from "../../title/style";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { BackgroundIcon, BackgroundIconGreen } from "../../button/style";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import api from "../../../services/services";

export const Card = ({
    status,
    encomenda,
    id,
    setTrue
}) => {

    const [cancelarEncomenda, setCancelarEncomenda] = useState()


    async function AlterarStatus() {

        await api.patch(`/Carrinho/AtualizarStatusCarrinho?idCarrinho=${id}&status=3`).then(response => {

            // setCancelarEncomenda(response.data)
            console.log(response.data);
            setTrue(true)

        }).catch(error => {
            console.log(error);
        })

    }

    async function AlterarStatusRealizado() {

        await api.patch(`/Carrinho/AtualizarStatusCarrinho?idCarrinho=${id}&status=2`).then(response => {

            // setCancelarEncomenda(response.data)
            console.log(response.data);
            setTrue(true)
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

                        {/* botao v */}
                        <Ionicons name="close" size={20} color="#B80000" onPress={() => AlterarStatus()} />

                    </BackgroundIcon>


                    <BackgroundIconGreen>
                        <FontAwesome6 name="check" size={18} color="#1C4B00" onPress={() => AlterarStatusRealizado()} />
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

        <CardContainerPerfil borderColor={
            status == 1 ? "#1C4B00" : "#8C8A97"
        }>
            {id ?
                <BoxCard>
                    {/* <CardImage /> */}


                    {
                        status == 1 ?
                            <CardTextContainer>

                                <>
                                    <CardName>{encomenda.idProdutoNavigation.nome}</CardName>
                                </>

                                <CardStatus>Status: {status == 1 ? 'Pendente' : null}</CardStatus>

                                {/* <CardData>Data: {dataEncomenda}</CardData> */}

                            </CardTextContainer>
                            :
                            <CardTextContainerStatus>
                                <CardNameStatus>
                                    {encomenda.idProdutoNavigation.nome}
                                </CardNameStatus>
                                <CardStatus>Status: {status == 2 ? 'Retirado' : 'Cancelado'}</CardStatus>

                            </CardTextContainerStatus>
                    }

                    {Check()}

                </BoxCard>
                :
                <ActivityIndicator />

            }
        </CardContainerPerfil>


    );
};