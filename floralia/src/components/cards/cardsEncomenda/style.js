import styled from "styled-components";

export const CardContainer = styled.TouchableOpacity`
  /* box-shadow: 0px 0px 1px black; */
  elevation: 3; 
  margin-top: 12px;
  margin-bottom: 5px;
  align-self: center;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  border: 3px;
  border-color:blue;
  /* padding: 10px; */
  width: 90%;
  height: 108px;
  flex-direction: row;

  /* ${props => props.selecionada && css`
    border: 2px solid #49B3BA;
  `} */

`;