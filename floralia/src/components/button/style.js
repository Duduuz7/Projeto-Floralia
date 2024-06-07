import styled from "styled-components";

export const ButtonVerde = styled.TouchableOpacity`
    width: 90%;
    height: 44px;

    background-color: #1C4B00;
    margin-top: 30px;
    padding: 12px 8px 12px 8px;
    border-radius: 18px;

    align-items: center;
    justify-content: center;
`

export const BackgroundIcon = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  background-color: #FFECF2;
  align-items: center;
  border-radius: 70px;
  justify-content: center;
`

export const BackgroundIconGreen = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  background-color: #E4FFD4;
  align-items: center;
  border-radius: 70px;
  justify-content: center;
`

export const BackgroundIconCamera = styled(BackgroundIcon)`
  position: absolute;
  top: 175px;
  right: 0px;
`