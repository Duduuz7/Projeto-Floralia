import styled from "styled-components";

export const Picture = styled.Image`
    width: 100%;
    height: 250px;
    border-radius: 8px;
`
export const ProdutoDescription = styled.View`
    width: 90%;
    border: 2px solid #1C4B00;
    border-radius: 0px 0px 8px 8px;
    padding-bottom: 5px;
    padding-top: 4px;
`
export const ContainerClose = styled.TouchableOpacity`
    /* width: 110%;
    height: 20px;
    justify-content: flex-start;   
    align-items: flex-end; */

    position: absolute;
    top: 7px;
    right: 13px;

`
export const EncomendaModal = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.60);
`
export const ModalContent = styled.View`
    padding: 20px 30px 10px;
    width: 90%;
    /* height: 60%; */
    border-radius: 20px 20px 0px 0px;
    background-color: #FBFBFB;
    align-items: center;   
`

export const ContainerModalEncomenda = styled(ModalContent)`
    border-radius: 20px;
`
export const ContainerButtonTab = styled.View`
    width: 90%;
    height: 50px;
    border-top: 10px; 
    background-color: #FFFFFF;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;

    border-radius: 0px 0px 20px 20px;
`
export const PictureContent = styled.View`
    width: 90%;
    height: 255px;
    margin-top: 15px;
    margin-bottom: -2px;
    border: 2px solid #1C4B00;
    border-radius: 8px 8px 0px 0px;
`
export const TitleModal = styled.Text`
    text-align: center;
    font-size: 20px;
    font-family: Exo2_700Bold;
    color: #B83B5E;
`
export const TitleDescription = styled.Text`
    text-align: center;
    font-size: 17px;
    margin-bottom: 8px;
    font-family: Exo2_600SemiBold;
    color: #1C4B00;
`
export const Description2 = styled.Text`
    text-align: center;
    font-size: 12px;
    color: #1C4B00;
`
export const Description = styled.Text`
  margin-top: 20px;
  width: 90%;
  height: 120px;
  font-size: 18px;
  font-family: Quicksand_500Medium;
  color: #534E63;
  text-align: center;
`
export const ButtonModal = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    margin-bottom: 35px;

    background-color: #1C4B00;
    margin-top: 15px;
    padding: 12px 8px 12px 8px;
    border-radius: 30px;

    align-items: center;
    justify-content: center;
`
export const ButtonCarrinho = styled.TouchableOpacity`
    width: 160px;
    height: 30px;
    background-color: #FFECF2;
    border-radius: 30px;

    align-items: center;
    justify-content: center;
    
`
export const TitleButtonModal = styled.Text`
    font-size: 18px;
    font-family: Quicksand_600SemiBold;
    color: #FFFFFF;
`
export const TitleButtonProduto = styled(TitleButtonModal)`
    font-size: 12px;
    color: #33303E;
`
export const PrecoProduto =styled(TitleDescription)`
    margin-top: -5px;
    margin-bottom: 5px;
    color: #99004F;
`
export const CantainerParcelas = styled.View`
  width: 100% ;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const TextParcelasBlack = styled.Text`
    color: #000000;
    font-size: 17px;
    font-family: Exo2_600SemiBold;
`
export const TextParcelasPink = styled(TextParcelasBlack)`
    color: #99004F;
    padding-right: 5px;
    padding-left: 5px;
`