import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LocalAPI from "./src/JSONServer/LocalAPI";

export default function App() {
  return (
    <View className="flex-1">
      <LocalAPI />
    </View>
  );
}
