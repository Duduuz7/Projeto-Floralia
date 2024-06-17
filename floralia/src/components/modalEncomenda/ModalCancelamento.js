
import { ButtonModal, ContainerClose, ContainerModalEncomenda, Description, EncomendaModal, ModalContent, TitleButtonModal, TitleModal } from "./StyledModalEncomenda";

import { Ionicons } from '@expo/vector-icons';
import { Modal } from "react-native";



import { useState } from "react";
import api from "../../services/services";

export const ModalCancelamento = ({
  navigation,
  visible,

  setShowModalCancel = null,
  ...rest
}) => {
 

  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      {/* container */}
      <EncomendaModal>
                 <ContainerModalEncomenda>
                 <ContainerClose onPress={() => setShowModalRetiraCarrinho()}>
                     <Ionicons name="close" size={24} color="#99004F" />
                 </ContainerClose>
                     <TitleModal>Atenção!</TitleModal>
                     <Description>Tem certeza que deseja cancelar encomenda? Esta ação não poderá ser desfeita!</Description>
                     <ButtonModal>
                         <TitleButtonModal>Confirmar</TitleButtonModal>
                     </ButtonModal>
                 </ContainerModalEncomenda>
             </EncomendaModal>
    </Modal>
  );
};


export const ModalRetirar = ({
  navigation,
  visible,
  setShowModalCancelar,
  carrinho,
  ...rest
}) => {
 
  
  async function DeletarDoCarrinho() {

    await api.delete(`/Carrinho/Deletar?id=${carrinho.id}`).then(response => {
        console.log(response.data);
      setShowModalCancelar(false)
    }).catch(error => {
        console.log(error);
    })

}

  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      {/* container */}
      <EncomendaModal>
                 <ContainerModalEncomenda>
                 <ContainerClose onPress={() => setShowModalCancelar(false)}>
                     <Ionicons name="close" size={24} color="#99004F" />
                 </ContainerClose>
                     <TitleModal>Atenção!</TitleModal>
                     <Description>Tem certeza que deseja retirar este produto? Esta ação não poderá ser desfeita!</Description>
                     <ButtonModal onPress={() => DeletarDoCarrinho()}>
                         <TitleButtonModal>Confirmar</TitleButtonModal>
                     </ButtonModal>
                 </ContainerModalEncomenda>
             </EncomendaModal>
    </Modal>
  );
};


