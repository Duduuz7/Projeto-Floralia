import { View } from "react-native";
import { BoxCard, CardContainerItem, CardTextContainer } from "../../container/style";
import { CardImage } from "../../images/style";
import { CardName, CardPreco } from "../../title/style";
import { CardContainer } from "../cardsEncomenda/style";
import { BackgroundIcon } from "../../button/style";
import { Ionicons } from '@expo/vector-icons';
import api from "../../../services/services";

export const CardProduto = ({
    nome,
    imagem,
    idFavorito,
}) => {


    //passar o id do favorito pelo modal
    async function DeletarFavorito() {

        await api.delete(`/Favorito?id=${idFavorito}`).then(response => {

            console.log('funcionou');

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
                source={{ uri: imagem }} 
                />

                {/* <CardContainerItem> */}

                <CardTextContainer>

                    <CardName>{nome}</CardName>


                    {/* <CardPreco>R$: {preco}</CardPreco> */}

                </CardTextContainer>

                <View style={{ marginTop: 24}}>
                    <BackgroundIcon onPress={()=> DeletarFavorito()}>
                        <Ionicons name="heart-dislike-outline" size={26} color="#B83B5E"  />
                    </BackgroundIcon>
                </View >
                {/* </CardContainerItem> */}

            </BoxCard>
        </CardContainer>
    )
}
