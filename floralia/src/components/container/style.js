import styled from "styled-components";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fafafa;
  gap: 5px;
`

export const BoxCard = styled.SafeAreaView`
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  
`

export const CardTextContainer = styled.SafeAreaView`
  flex-direction: column;
  align-self: center;
  width: 43%;
  margin-left: 0px;
  gap: 3px;
  align-items: center;
  /* border-color: black;
  border-width: 1px; */
`

export const FlatContainer = styled.FlatList`
  width: 100%;
  margin-bottom: 20px;
  padding-bottom: 60px;
`

export const HrProfile = styled.SafeAreaView`
  width: 90%;
  height: 3px;
  background-color: #1C4B00;
  border-radius: 2px;
  margin-bottom:35px;
`

// export const CardContainerItem = styled.SafeAreaView`
//   width: 240px;
//   height: 108px;
//   border: 2px;
//   border-color: red;
// `

export const ContainerProfile = styled.SafeAreaView`
  width: 60%;
  height: 90px;
  /* border: 1px; */
  /* border-color: black; */
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
`

export const FooterContainer = styled.SafeAreaView`
  height: 100px;
  width: 100%;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  elevation: 44px;
  border:2px;
  border-color: black;
`

