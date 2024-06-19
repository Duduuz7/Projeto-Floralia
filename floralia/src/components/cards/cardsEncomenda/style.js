import styled from "styled-components";

export const CardContainer = styled.TouchableOpacity`
  /* box-shadow: 1px 1px 3px #00000080; */
  /* elevation: 4px;  */
  margin-top: 12px;
  margin-bottom: 5px;
  align-self: center;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
 
  /* padding: 10px; */
  width: 90%;
  height: 108px;
  flex-direction: row;

  border: 2px;
  border-color: ${props => props.borderColor};


`;
export const CardContainerPerfil = styled.View`
  /* box-shadow: 1px 1px 3px #00000080; */
  /* elevation: 4px;  */
  margin-top: 12px;
  margin-bottom: 5px;
  align-self: center;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
 
  /* padding: 10px; */
  width: 90%;
  height: 108px;
  flex-direction: row;

  border: 2px;
  border-color: ${props => props.borderColor};


`;