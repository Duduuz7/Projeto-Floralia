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
  padding-right: 12px;
  width: 50%;
  align-self: center;
  margin-left: 0px;
  gap: 3px;
  align-items: center;
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

