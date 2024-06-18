import styled from "styled-components";

export const Button = styled.TouchableOpacity`
  width: 90%;
  height: 44px;
  background-color: #496bba;
  border: solid 1px #496bba;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const ButtonAppointmentSecondary = styled(Button)`
  background-color: transparent;
  border: none;
  margin-top: 30px;
`;


export const ButtonModalAppointment = styled(Button)`
    width: 80%;
    margin-top: 30px;
`


export const ButtonSecondaryText = styled.Text`
    color: #496BBA;
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 14px;
    text-decoration: underline;
    text-decoration-color: #496BBA;
    align-self: center;
    /* margin-top: 16px; */
`

export const ButtonTitle = styled.Text`
    color: #FAFAFA;
    font-family: 'MontserratAlternates_700Bold';
    font-size: 14px;
`

export const ContainerFoto = styled.View`
    width: 80%;
    height: 111px;
    background-color: #F5F3F3;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-top: 10px;
`

export const ContainerLabel = styled.View`
    width: 80%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const ContainerPerfil = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #FBFBFB;
`

export const ButtonCamera = styled.TouchableOpacity`
    height: 44px;
    background-color: #49B3BA;
    align-items: center;
    border-radius: 5px;
    width: 50%;
    margin-top: 10px;
    justify-content: center;
    flex-direction: row;
    gap: 5px;
`

export const TextButtonCamera = styled(ButtonTitle)`
    color: #FFFFFF;
`

export const TextGray = styled.Text`
    font-family: 'Quicksand_500Medium';
    font-size: 14px;
    color: #4E4B59;
`

export const TextGraySemiBold = styled(TextGray)`
    font-family: 'Quicksand_600SemiBold';
    color: #8C8A97;
`

export const TextRed = styled(TextGraySemiBold)`
    color: #C81D25;
`

export const TextRed2 = styled(TextRed)`
    color: #C81D25;
    padding-right: 20px;
    padding-top: 10px;
`

export const TextFoto = styled.Text`
    font-family: 'MontserratAlternates_500Medium';
    font-size: 14px;
    color: #33303E;
    text-align: center;
    /* width: 80%; */
    color: #4E4B59;
`