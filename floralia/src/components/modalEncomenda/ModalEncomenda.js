import { Modal } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { ButtonModal, ContainerClose, ContainerModalEncomenda, Description, EncomendaModal, ModalContent, TitleButtonModal, TitleModal } from "./StyledModalEncomenda";

import { useEffect, useState } from "react";
import api from "../../services/services";
import { userDecodeToken } from "../../utils/auth";
export const ModalEncomenda = ({
  agendamento,
  navigation,
  visible,
  setShowModal = null,
  token,
  setShowModalConfirmar,
  ...rest
}) => {

async function AtualizarStatus() {
  try {
    await api.put(`/Carrinho/AtualizarStatus?idUsuario=${token.user}&status=1`).then(response => {
      console.log(response.data);
      console.log('Funcionou');
    }).catch(error => {
      console.log(error);
    })
  } catch (error) {
    console.log(error);
  }
}

async function handleFunction() {
    AtualizarStatus()
    // navigation.replace('Profile')
    setShowModalConfirmar(false)
}



  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <EncomendaModal>
        <ContainerModalEncomenda>
          <ContainerClose>
            <Ionicons name="close" size={24} color="#99004F" />
          </ContainerClose>
          <TitleModal>Atenção!</TitleModal>
          <Description>Ao finalizar a encomenda declaro estar ciente que será necessário a retirada do produto em até 10 dias em nossa loja física</Description>
          <ButtonModal onPress={() => handleFunction()}>
            <TitleButtonModal>Confirmar</TitleButtonModal>
          </ButtonModal>
        </ContainerModalEncomenda>
      </EncomendaModal>
    </Modal>
  );
};

