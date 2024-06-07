import { StyleSheet, TouchableOpacity } from "react-native";
import { Container } from "../../components/container/style";
import { InputLinhaVerde } from "../../components/input/style";
import {
  LinkRosa,
  TextInputVerde,
  TextVerde,
} from "../../components/text/style";
import { TitleVerde } from "../../components/title/style";
import { ButtonVerde } from "../../components/button/style";
import { TextButtonVerde } from "../../components/textbutton/style";
import { Logo } from "../../components/images/style";

import {
  ViewInputIcon,
  ViewLeft,
  ViewLinha,
  ViewSpaceBottom,
  ViewSpaceTop,
} from "../../components/views/style";

import { useState } from "react";
import Feather from "@expo/vector-icons/Feather";

{
  /* <Feather name="eye" size={24} color="black" /> */
}
{
  /* <Feather name="eye-off" size={24} color="black" /> */
}

export const Login = () => {

  const [email, setEmail] = useState("email@email.com");
  const [senha, setSenha] = useState("12345");

  const handleEmail = () => {
    setEmail("");
  };

  const handleChangeEmail = (newText) => {
    setEmail(newText);
  };

  const handleSenha = () => {
    setSenha("");
  };

  const handleChangeSenha = (newText) => {
    setSenha(newText);
  };


  return (
    <Container>
      <Logo
        source={require('../../assets/img/logo-removebg-preview 2Logo_Floralia (1) 1.png')}
      />
      <TitleVerde>Login</TitleVerde>
      
        <InputLinhaVerde
        value={email}
        onFocus={handleEmail}
        onChangeText={handleChangeEmail}
        placeholder="Email"
      />


      <InputLinhaVerde
        value={senha}
        onFocus={handleSenha}
        onChangeText={handleChangeSenha}
        placeholder="Senha"
      />

      <LinkRosa>Esqueceu sua senha?</LinkRosa>

      <ButtonVerde>
        <TextButtonVerde>ENTRAR</TextButtonVerde>
      </ButtonVerde>

      <TextVerde>É novo aqui? <TouchableOpacity>

        <LinkRosa>Crie sua conta agora!</LinkRosa>
      </TouchableOpacity>
      </TextVerde>


    </Container>
  )

  // return (
  //   <Container>
  //     <ViewSpaceTop></ViewSpaceTop>

  //     <Logo source={require("../../assets/img/logoFloralia.png")} />

  //     <TitleVerde>Login</TitleVerde>


  //     <InputLinhaVerde
  //       value={email}
  //       onFocus={handleEmail}
  //       onChangeText={handleChangeEmail}
  //       placeholder="Email"
  //     />


  //     <InputLinhaVerde
  //       value={senha}
  //       onFocus={handleSenha}
  //       onChangeText={handleChangeSenha}
  //       placeholder="Senha"
  //     />

  //     <ViewLeft>
  //       <TouchableOpacity>
  //         <LinkRosa>Esqueceu sua senha?</LinkRosa>
  //       </TouchableOpacity>
  //     </ViewLeft>
      
  //     <ButtonVerde>
  //       <TextButtonVerde>ENTRAR</TextButtonVerde>
  //     </ButtonVerde>

  //     <ViewSpaceBottom></ViewSpaceBottom>

  //     <ViewLinha>
  //       <TextVerde>
  //         É novo aqui?{" "}
  //         <TouchableOpacity>
  //           <LinkRosa>Crie sua conta agora!</LinkRosa>
  //         </TouchableOpacity>
  //       </TextVerde>
  //     </ViewLinha>
  //   </Container>
  // );
}


// return (
//   <Container>
//     <ViewSpaceTop></ViewSpaceTop>

//     <Logo source={require("../../assets/img/logoFloralia.png")} />

//     <TitleVerde>Login</TitleVerde>


//     <InputLinhaVerde
//       value={email}
//       onFocus={handleEmail}
//       onChangeText={handleChangeEmail}
//       placeholder="Email"
//     />


//     <InputLinhaVerde
//       value={senha}
//       onFocus={handleSenha}
//       onChangeText={handleChangeSenha}
//       placeholder="Senha"
//     />

//     <ViewLeft>
//       <TouchableOpacity>
//         <LinkRosa>Esqueceu sua senha?</LinkRosa>
//       </TouchableOpacity>
//     </ViewLeft>
//     <ButtonVerde>
//       <TextButtonVerde>ENTRAR</TextButtonVerde>
//     </ButtonVerde>

//     <ViewSpaceBottom></ViewSpaceBottom>

//     <ViewLinha>
//       <TextVerde>
//         É novo aqui?{" "}
//         <TouchableOpacity>
//           <LinkRosa>Crie sua conta agora!</LinkRosa>
//         </TouchableOpacity>
//       </TextVerde>
//     </ViewLinha>
//   </Container>
// );

