import { ActivityIndicator, Alert, Modal, TouchableOpacity } from "react-native";
import { ButtonCarrinho, ButtonModal, CantainerParcelas, ContainerButtonTab, ContainerClose, Description, Description2, EncomendaModal, ModalContent, Picture, PictureContent, PrecoProduto, ProdutoDescription, TextParcelasBlack, TextParcelasPink, TitleButtonModal, TitleButtonProduto, TitleDescription, TitleModal } from "./StyledModalEncomenda";
import { Ionicons } from '@expo/vector-icons';

// import {
//   ModalContent,
//   PatientModal,
// } from "../CancellationModal/StyleCancelationModal";

import { userDecodeToken } from "../../utils/auth";
import React, { useEffect, useState } from "react";
import api from "../../services/services";
import { useFocusEffect } from "@react-navigation/native";

export const ModalCarrinho = ({
  navigation,
  visible,
  profile,
  setShowModalCarrinho,
  setShowModal = null,
  produto,
  ...rest
}) => {
  // const [profile, setProfile] = useState(null);

  // async function profileLoad() {
  //   const token = await userDecodeToken();

  //   setProfile(token);
  // }

  const [favorito, setFavorito] = useState(false)

  // function handleFunction() {
  //   navigation.navigate('Login')
  //   setShowModalCarrinho(false)
  //   Alert.alert('Atenção',
  //     'É preciso estar logado'
  //   )
  // }

  async function AdicionarFavorito() {
    await api.post(`/Favorito`, { idUsuario: profile.user, idProduto: produto.id }).then(response => {
      console.log(response.data);
      setFavorito(true)
    }).catch(error => {
      console.log(error);
    })
  }

  // async function DeletarFavorito() {

  //   await api.delete(`/Favorito?id=${idFavorito}`).then(response => {

  //     console.log('funcionou');

  //   }).catch(error => {
  //     console.log(error);
  //   })

  // }

  async function ProdutoFavorito() {
    try {
      await api.get(`/Favorito/BuscaPorIdProduto?idUsuario=${profile.user}&idProduto=${produto.id}`).then(response => {
        console.log(response);
        console.log('favorito');
        if (response.status == 200) {
          setFavorito(true)
        }
        else {
          setFavorito(false)
          // navigation.navigate('Login')
        }
      })
        .catch(error => {
          console.log(error);
        })
    } catch (error) {
      console.log(error);
    }
  }


  async function AdicionarCarrinho() {
    try {
      if (profile.user != null) {

        await api.post(`/Carrinho/Cadastrar`, { idUsuario: profile.user, idProduto: produto.id }).then(response => {
          console.log('Cadastrado');
        }).catch(error => {
          console.log(error);
        })
      }
      else {
        handleFunction()
      }

    } catch (error) {
      console.log(error);
    }
  }

  // async function ProdutoID() {
  //   await api.get()
  // }

  function handleClose() {
    AdicionarCarrinho()
    setShowModalCarrinho(false)
  }


  useFocusEffect(React.useCallback(() => {
    ProdutoFavorito();
  }, [favorito, produto]))

  useEffect(() => {
    ProdutoFavorito()
  },[produto, favorito])

  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      {produto ? <>
        <EncomendaModal>
          <ModalContent>


            <ContainerClose onPress={() => setShowModalCarrinho(false)}>
              <Ionicons name="close" size={24} color="#99004F" />
            </ContainerClose>
            <PictureContent>
              <Picture
                source={{ uri: produto.foto }}
              />
            </PictureContent>
            <ProdutoDescription>
              <TitleDescription>{produto.nome}</TitleDescription>
              <PrecoProduto>R$ {produto.preco}</PrecoProduto>
              <CantainerParcelas>
                <TextParcelasPink>3x </TextParcelasPink>
                <TextParcelasBlack>de </TextParcelasBlack>
                <TextParcelasPink>R${(produto.preco / 3).toFixed(2)}</TextParcelasPink>
                <TextParcelasBlack>sem juros</TextParcelasBlack>
              </CantainerParcelas>

            </ProdutoDescription>
            <TitleDescription>Descrição:</TitleDescription>
            <Description2>{produto.descricao}</Description2>
          </ModalContent>
          <ContainerButtonTab>
            {favorito ? <Ionicons name="heart-sharp" size={24} color="#B83B5E" /> :
              <TouchableOpacity onPress={() => AdicionarFavorito()}>
                <Ionicons name="heart-outline" size={24} color="#B83B5E" />
              </TouchableOpacity>

            }


            <ButtonCarrinho onPress={() => handleClose()}>
              <TitleButtonProduto>Adicionar ao carrinho</TitleButtonProduto>
            </ButtonCarrinho>
          </ContainerButtonTab>
        </EncomendaModal>
      </>
        : <ActivityIndicator color={"#99004f"} />}
    </Modal>
  );
};
