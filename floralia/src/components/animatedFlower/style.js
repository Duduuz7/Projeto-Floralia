import LottieView from "lottie-react-native";
import styled from "styled-components";
import splashFlower from "../../assets/SPLASHFLOWER.json";

export const AnimatedStyle = styled(LottieView).attrs({
  source: splashFlower,
  autoPlay: true,
  loop: true,
})`
  width: 77px;
  height: 75px;
`;

export const ContainerLottieStyle = styled.View`
  width: 77px;
  height: 75px;
`;