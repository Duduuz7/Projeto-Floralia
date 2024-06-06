import styled from "styled-components";

export const TextInputVerde = styled.Text`
    font-family: "Exo2_600SemiBold";
    font-size: 14px;
    color: #2A6A03;
`

export const LinkRosa = styled(TextInputVerde)`
    margin-right: 54%; 
    margin-top: 5px;
    /* margin-right: 50%; */
    /* margin-top: 30px; */
    color: #99004F;
    text-decoration-line: underline;
`
export const LinkRosaConta = styled(LinkRosa)`
    margin-top: 5px;
`

export const LinkRosaCod = styled(LinkRosa)`
    margin-right: 0px;
`

export const TextVerde = styled.Text`
    /* margin-top: 68%; */
    color: #1C4B00;
    font-size: 14px;
    font-family: "Exo2_500Medium";
`

export const TextoQuicksandMedium = styled.Text`
    margin-top: 5px;
    font-size: 16px;
    color: #534E63;
    font-family: "Quicksand_500Medium";
    text-align: center;
    width: 90%;
`

export const TextoCinzaCod = styled(TextoQuicksandMedium)`
    width: 70%;
    margin-bottom: -14px;
`