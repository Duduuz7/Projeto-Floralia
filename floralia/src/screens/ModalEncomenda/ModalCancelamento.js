import { Modal } from "react-native";
import { Container } from "../../components/container/style";
import { ButtonModal, ContainerClose, ContainerModalEncomenda, Description, EncomendaModal, ModalContent, TitleButtonModal, TitleModal } from "./StyledModalEncomenda";
import { ButtonVerde } from "../../components/button/style";
import { Ionicons } from '@expo/vector-icons';

export const ModalCancelamento = () => {
    return (
        <Modal>
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