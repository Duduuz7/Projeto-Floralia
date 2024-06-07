import { StatusBar } from 'react-native';
import { ContainerSplash, LogoSplash } from './style';
import { AnimatedFlower } from '../../components/animatedFlower/animatedFlower';
import { useEffect } from 'react';
import { CommonActions } from '@react-navigation/native';


export default function Splash({ navigation }) {

  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(CommonActions.reset({
        index: 0,
        routes: [{ name: 'Navegacao' }]
      }))
    }, 1000);
  })

  return (
    <ContainerSplash>
      <StatusBar style='light' />
      <LogoSplash source={require("../../assets/logo-floraliapng-splash.png")} />
      <AnimatedFlower />
    </ContainerSplash>
  )
}