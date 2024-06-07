import { Modal } from "react-native";
import { Container } from "../../components/container/style";
import { ButtonModal, ContainerClose, ContainerModalEncomenda, Description, EncomendaModal, ModalContent, TitleButtonModal, TitleModal } from "./StyledModalEncomenda";
import { ButtonVerde } from "../../components/button/style";
import { Ionicons } from '@expo/vector-icons';

export const ModalEncomenda = () => {
    return (
        <Modal>
            <EncomendaModal>
                <ContainerModalEncomenda>
                    <ContainerClose>
                        <Ionicons name="close" size={24} color="#99004F" />
                    </ContainerClose>
                    <TitleModal>Atenção!</TitleModal>
                    <Description>Ao finalizar a encomenda declaro estar ciente que será necessário a retirada do produto em até 10 dias em nossa loja física</Description>
                    <ButtonModal>
                        <TitleButtonModal>Confirmar</TitleButtonModal>
                    </ButtonModal>
                </ContainerModalEncomenda>
            </EncomendaModal>
        </Modal>
    );
};