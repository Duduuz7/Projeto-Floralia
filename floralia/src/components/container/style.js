import styled from "styled-components";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fafafa;
  gap: 5px;
`;

export const ContainerCardHome = styled.SafeAreaView`
  align-items: center;
  width: 95;
  height: 125;
  border: 2px;
  border-radius: 4px;
  border-color: #1C4B00;
  margin: 8px;
`;

export const ContainerDescription = styled.SafeAreaView`
  align-items: center;
  width: 100%;
  border-top-width: 2px;
  border-color: #1C4B00;
`;

export const ContainerSearch = styled.View`
  /* flex: 1; */
  flex-direction: row;
  align-items: center;
`;

export const ContainerProduto = styled.View`
  /* flex-direction: row; */
  margin-top: 30px;
  align-items: center;
  width: 90%;
  height: 75%;
`;

export const BoxCard = styled.SafeAreaView`
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  border: 2px;
`;

export const CardTextContainer = styled.SafeAreaView`
  flex-direction: column;
  align-self: center;
  width: 43%;
  margin-left: 0px;
  gap: 3px;
  align-items: center;
  /* border-color: black;
  border-width: 1px; */

`;

export const FlatContainer = styled.FlatList`
  width: 100%;
  margin-bottom: 20px;
  padding-bottom: 60px;
`;

export const FlatContainerHome = styled.FlatList`
  flex-wrap: wrap;
  padding: 10px;
  height: 75%;
`;

export const HrProfile = styled.SafeAreaView`
  width: 90%;
  height: 3px;
  background-color: #1c4b00;
  border-radius: 2px;
  margin-bottom: 35px;
`;

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
  `
export const BackgroundIcon = styled.SafeAreaView`
  width: 56px;
  height: 56px;
  background-color: #ffecf2;
  align-items: center;
  justify-content: center;
`

export const FooterContainer = styled.SafeAreaView`
  height: 100px;
  width: 100%;
  border-top-width: 1px;
  border-color: #817878;

/* math pode arrumar isso aki eu sei q ta feiao mas tentei...... */
  box-shadow: 1px 1px 3px #00000080;

  align-items: center;
  justify-content: space-around;
  flex-direction:row;


`;

export const ContainerSecure = styled.View`
  width: 100%;
  height: 90px;
  margin-left: 10%;
  margin-bottom: 18px;
  margin-top: -25px;
`;

export const ViewNovoAqui = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const TextContainerCart = styled.SafeAreaView`
  width: 100px;
  height: 80px;
  margin-left: 8%;

`
export const ContainerIcon = styled.SafeAreaView`
  width: 100px;
  height: 80px;
  margin-top: 12px;
  margin-left: 15;
  flex-direction: row;
  align-items: center;
  gap: 10;
`

