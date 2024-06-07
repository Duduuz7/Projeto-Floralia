import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Container, ViewNovoAqui } from "../../components/container/style";
import { InputLinhaVerde } from "../../components/input/style";
import {
  LinkRosa,
  LinkRosaConta,
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



import { InputLinha, InputLinhaSenha } from "../../components/inputFunction/inputFunction";


export const Login = () => {

<<<<<<< HEAD
  const [email, setEmail] = useState("email@email.com");
  const [senha, setSenha] = useState("12345");
=======
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [secure, setSecure] = useState(true);

>>>>>>> origin/edu

  const handleEmail = () => {
    setEmail("");
  };

  const handleChangeEmail = () => {
    setEmail();
  };

  const handleSenha = () => {
    setSenha();
  };

  const handleChangeSenha = () => {
    setSenha();
  };


  return (
    <Container>
      <Logo
        source={require('../../assets/img/logo-removebg-preview 2Logo_Floralia (1) 1.png')}
      />
      <TitleVerde>Login</TitleVerde>
<<<<<<< HEAD
      
        <InputLinhaVerde
=======

      <InputLinha
>>>>>>> origin/edu
        value={email}
        onFocus={handleEmail}
        onChangeText={handleChangeEmail}
        placeholder="Email"
      />


      <InputLinhaSenha
        onPress={() => { secure ? setSecure(false) : setSecure(true) }}
        value={senha}
        onFocus={handleSenha}
        onChangeText={handleChangeSenha}
        secureTextEntry={secure}
        placeholder="Senha"
      />

<<<<<<< HEAD
      <LinkRosa>Esqueceu sua senha?</LinkRosa>

      <ButtonVerde>
        <TextButtonVerde>ENTRAR</TextButtonVerde>
      </ButtonVerde>

      <TextVerde>É novo aqui? <TouchableOpacity>

        <LinkRosa>Crie sua conta agora!</LinkRosa>
=======
      <TouchableOpacity >
        <LinkRosa>Esqueceu sua senha?</LinkRosa>
>>>>>>> origin/edu
      </TouchableOpacity>


      {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft }}> */}

      <ViewNovoAqui>

        <TextVerde>É novo aqui?</TextVerde>

        <TouchableOpacity>
          <LinkRosaConta>Crie sua conta agora!</LinkRosaConta>
        </TouchableOpacity>

      </ViewNovoAqui>

      {/* </View> */}




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

