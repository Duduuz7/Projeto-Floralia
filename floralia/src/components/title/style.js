import styled from "styled-components";

export const TitleVerde = styled.Text`
    color: #2A6A03;
    font-family: 'Exo2_600SemiBold';
    font-size: 20px;
    flex-direction: "start";
    margin-top: 25px;
`

export const TitleName = styled(TitleVerde)`
    margin-bottom: 16px;
`
export const TitleVerdeProfile = styled(TitleVerde)`
 text-align: left;
`

export const CardName = styled(TitleVerde)`
    margin-left: 10px;
    font-size: 19px;
    align-self: flex-start;
    margin-top: 0px;
`

export const CardStatus = styled(CardName)`
    color: #99004F;
    font-size: 16px;
    margin-top: 0px;
`

export const CardData = styled(CardName)`
    color: black;
    font-size: 16px;
    margin-top: 0px;
`

export const CardPreco = styled(CardName)`
    color: #99004F;
`


