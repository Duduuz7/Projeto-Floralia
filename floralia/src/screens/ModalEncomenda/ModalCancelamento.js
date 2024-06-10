
import { ButtonModal, ContainerClose, ContainerModalEncomenda, Description, EncomendaModal, ModalContent, TitleButtonModal, TitleModal } from "./StyledModalEncomenda";

import { Ionicons } from '@expo/vector-icons';
import { Modal } from "react-native";


import { handleCallNotifications } from "../../components/Notifications/Notifications";
import { useState } from "react";
import api from "../../services/Services";

export const ModalCancelamento = ({
  navigation,
  visible,
  consultaCancel,
  setShowModalCancel = null,
  ...rest
}) => {
  const [loading, setLoading] = useState(false);

  async function CancelarConsulta() {
    setLoading(true);

    //Chamando o metodo da api
    //Consultas/Status?idConsulta=57b9816a-4168-418f-9cce-151e6d573ce8&status=Canceladas
    await api
      .put(
        `/Consultas/Status?idConsulta=${
          consultaCancel.id
        }&status=${"Canceladas"}`
        // { id: consultaCancel.id, status: consultaCancel.situacaoId }
      )
      .then((response) => {
        handleCallNotifications({
          title: "Consulta Canceladas",
          body: "Sua consulta foi cancelada com sucesso !",
        });

        setShowModalCancel(false);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      {/* container */}
      <EncomendaModal>
                 <ContainerModalEncomenda>
                 <ContainerClose>
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


// import { Modal } from "react-native";
// import { Container } from "../../components/container/style";
// import { ButtonModal, ContainerClose, ContainerModalEncomenda, Description, EncomendaModal, ModalContent, TitleButtonModal, TitleModal } from "./StyledModalEncomenda";
// import { ButtonVerde } from "../../components/button/style";
// import { Ionicons } from '@expo/vector-icons';

// export const ModalCancelamento = () => {
//     return (
//         <Modal>
//             <EncomendaModal>
//                 <ContainerModalEncomenda>
//                 <ContainerClose>
//                     <Ionicons name="close" size={24} color="#99004F" />
//                 </ContainerClose>
//                     <TitleModal>Atenção!</TitleModal>
//                     <Description>Tem certeza que deseja cancelar encomenda? Esta ação não poderá ser desfeita!</Description>
//                     <ButtonModal>
//                         <TitleButtonModal>Confirmar</TitleButtonModal>
//                     </ButtonModal>
//                 </ContainerModalEncomenda>
//             </EncomendaModal>
//         </Modal>
//     );
// };