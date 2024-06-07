import { Modal } from "react-native";
import { Container } from "../../components/container/style";
import { ButtonCarrinho, ButtonModal, CantainerParcelas, ContainerButtonTab, ContainerClose, Description, Description2, EncomendaModal, ModalContent, Picture, PictureContent, PrecoProduto, ProdutoDescription, TextParcelasBlack, TextParcelasPink, TitleButtonModal, TitleButtonProduto, TitleDescription, TitleModal } from "./StyledModalEncomenda";
import { ButtonVerde } from "../../components/button/style";
import { Ionicons } from '@expo/vector-icons';

export const ModalCarrinho = () => {
    return (
        <Modal>
            <EncomendaModal>
                <ModalContent>
                    <ContainerClose>
                        <Ionicons name="close" size={24} color="#99004F" />
                    </ContainerClose>
                    <PictureContent>
                        <Picture
                            source={require('../../assets/img/Produto.png')}
                        />
                    </PictureContent>
                        <ProdutoDescription>
                            <TitleDescription>Buquê de Rosas </TitleDescription>
                            <PrecoProduto>R$ 119,90</PrecoProduto>
                            <CantainerParcelas>
                                <TextParcelasPink>3x </TextParcelasPink>
                                <TextParcelasBlack>de </TextParcelasBlack>
                                <TextParcelasPink>R$39,90 </TextParcelasPink>
                                <TextParcelasBlack>sem juros</TextParcelasBlack>
                            </CantainerParcelas>

                        </ProdutoDescription>
                    <TitleDescription>Descrição:</TitleDescription>
                    <Description2>Um buquê encantador de flores rosas e brancas, emanando ternura e serenidade, perfeito para expressar amor e gratidão em qualquer ocasião especial.</Description2>
                </ModalContent>
                <ContainerButtonTab>
                    <Ionicons name="heart-outline" size={24} color="#B83B5E" />
                    <ButtonCarrinho>
                        <TitleButtonProduto>Adicionar ao carrinho</TitleButtonProduto>
                    </ButtonCarrinho>
                </ContainerButtonTab>
            </EncomendaModal>
        </Modal>
    );
};