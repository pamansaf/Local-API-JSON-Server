import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import StackNav from "./src/navigation/StackNav";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <StackNav />
    </NavigationContainer>
  );
}
