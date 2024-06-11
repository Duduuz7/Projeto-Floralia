import { View } from "react-native";
import { BoxCard, CardContainerItem, CardTextContainer } from "../../container/style";
import { CardImage } from "../../images/style";
import { CardName, CardPreco } from "../../title/style";
import { CardContainer } from "../cardsEncomenda/style";
import { BackgroundIcon } from "../../button/style";
import { Ionicons } from '@expo/vector-icons';

export const CardProduto = ({
    idFavorito,
    name,
    precoProduto,
}) => {

    

    

    //passar o id do favorito pelo modal
    async function DeletarFavorito() {

        await api.delete(`/Favorito?id=${idFavorito}`).then(response => {

            console.log(response.data);

        }).catch(error => {
            console.log(error);
        })

    }

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

                <View style={{ marginTop: 24, marginLeft: 17 }}>
                    <BackgroundIcon>
                        <Ionicons name="heart-dislike-outline" size={26} color="#B83B5E" onPress={()=>DeletarFavorito()} />
                    </BackgroundIcon>
                </View >
                {/* </CardContainerItem> */}

            </BoxCard>
        </CardContainer>
    )
}
