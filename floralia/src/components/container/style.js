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
  border: 2px;
`

export const CardTextContainer = styled.SafeAreaView`
  flex-direction: column;
  padding-right: 12px;
  width: 50%;
  height: 80px;
  align-self: center;
  margin-left: 0px;
  gap: 3px;
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

export const BackgroundIcon = styled.SafeAreaView`
  width: 56px;
  height: 56px;
  background-color: #FFECF2;
  align-items: center;
  border-radius: 70px;
  justify-content: center;
`