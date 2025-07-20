import { ImageBackground, Text, View } from "react-native";

export default function SignIn() {
  return (
    <ImageBackground
      source={require("../../assets/onboarding-bg/onboarding-bg.png")}
    >
      <Text>Entrar...</Text>
    </ImageBackground>
  );
}
