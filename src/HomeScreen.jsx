import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import LocalAPI from "./JSONServer/LocalAPI";
import ImagePicker from "./ImagePicker";
import Login from "./CRUDfirabase/Authentication/Login";
import { auth } from "../config/firebaseConfig";

const HomeScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={() => OnLogout(auth)}>
        <Text className="bg-red-500 text-white px-5 py-1">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
