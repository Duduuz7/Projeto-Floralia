import { StatusBar } from 'react-native';


export default function Splash({ navigation }) {

    useEffect(() => {
      setTimeout(() => {
        navigation.dispatch(CommonActions.reset({
          index: 0,
          routes: [{ name: 'Navegacao' }]
        }))
      }, 5000);
    })
  
    return (
      <GradientScreen>
        <StatusBar style='light' />
        <BrandLogoWhite source={require('../../assets/VitalHub_LogoWhite.png')}/>
        <HeartAnimated/>
        <TextSplash>
          Ajudando você a cuidar da sua saúde!
        </TextSplash>
      </GradientScreen>
    )
  }