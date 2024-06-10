import { Modal } from "react-native";
import { ButtonCarrinho, ButtonModal, CantainerParcelas, ContainerButtonTab, ContainerClose, Description, Description2, EncomendaModal, ModalContent, Picture, PictureContent, PrecoProduto, ProdutoDescription, TextParcelasBlack, TextParcelasPink, TitleButtonModal, TitleButtonProduto, TitleDescription, TitleModal } from "./StyledModalEncomenda";
import { Ionicons } from '@expo/vector-icons';

// import {
//   ModalContent,
//   PatientModal,
// } from "../CancellationModal/StyleCancelationModal";
import api from "../../services/Services";
import { userDecodeToken } from "../../utils/Auth";
import { useEffect, useState } from "react";

export const ModalCarrinho = ({
  agendamento,
  navigation,
  visible,
  setShowModal = null,
  ...rest
}) => {
  const [profile, setProfile] = useState(null);

  async function profileLoad() {
    const token = await userDecodeToken();

    setProfile(token);
  }

  async function handleConfirm() {
    await api
      .post(`/Consultas/Cadastrar`, {
        ...agendamento,

        pacienteId: profile.idUsuario,

        situacaoId: "A2EF53F1-DA6B-45D2-9EF4-4EFE71801D07",
      })
      .then(
        setShowModal(false),

        navigation.replace("Main")
      )
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    profileLoad();
  }, []);

  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
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



// import { Modal } from "react-native";
// import { Container } from "../../components/container/style";
// import { ButtonCarrinho, ButtonModal, CantainerParcelas, ContainerButtonTab, ContainerClose, Description, Description2, EncomendaModal, ModalContent, Picture, PictureContent, PrecoProduto, ProdutoDescription, TextParcelasBlack, TextParcelasPink, TitleButtonModal, TitleButtonProduto, TitleDescription, TitleModal } from "./StyledModalEncomenda";
// import { ButtonVerde } from "../../components/button/style";
// import { Ionicons } from '@expo/vector-icons';

// export const ModalCarrinho = () => {
//     return (
//         <Modal>
//             <EncomendaModal>
//                 <ModalContent>
//                     <ContainerClose>
//                         <Ionicons name="close" size={24} color="#99004F" />
//                     </ContainerClose>
//                     <PictureContent>
//                         <Picture
//                             source={require('../../assets/img/Produto.png')}
//                         />
//                     </PictureContent>
//                         <ProdutoDescription>
//                             <TitleDescription>Buquê de Rosas </TitleDescription>
//                             <PrecoProduto>R$ 119,90</PrecoProduto>
//                             <CantainerParcelas>
//                                 <TextParcelasPink>3x </TextParcelasPink>
//                                 <TextParcelasBlack>de </TextParcelasBlack>
//                                 <TextParcelasPink>R$39,90 </TextParcelasPink>
//                                 <TextParcelasBlack>sem juros</TextParcelasBlack>
//                             </CantainerParcelas>

//                         </ProdutoDescription>
//                     <TitleDescription>Descrição:</TitleDescription>
//                     <Description2>Um buquê encantador de flores rosas e brancas, emanando ternura e serenidade, perfeito para expressar amor e gratidão em qualquer ocasião especial.</Description2>
//                 </ModalContent>
//                 <ContainerButtonTab>
//                     <Ionicons name="heart-outline" size={24} color="#B83B5E" />
//                     <ButtonCarrinho>
//                         <TitleButtonProduto>Adicionar ao carrinho</TitleButtonProduto>
//                     </ButtonCarrinho>
//                 </ContainerButtonTab>
//             </EncomendaModal>
//         </Modal>
//     );
// };