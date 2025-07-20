import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "./styles/global.css";
export default function App() {
  return (
    <View className="flex-1 items-center justify-center text-base">
      <Text>Open up App.tsx to start working on your app!a</Text>
      <StatusBar style="auto" />
    </View>
  );
}
