import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userName, setUserName] = useState();

  const OnRegister = () => {
    if (!email || !password || !userName) {
      ToastAndroid.show("Please fill all details", ToastAndroid.BOTTOM);
      Alert.alert("Please enter email & password");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed up
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: userName,
        });
        navigation.push("Login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        if (errorCode == "auth/email-already-in-use") {
          ToastAndroid.show("Email already exist", ToastAndroid.BOTTOM);
          Alert.alert("Email already exist");
        }
        // ..
      });
  };
  return (
    <LinearGradient
      colors={["#fc00ff", "#00dbde"]}
      className="flex-1 justify-center items-center"
    >
      <View
        style={{ elevation: 5 }}
        className="w-[80%] flex bg-white pt-5 pb-7 rounded-xl"
      >
        <View className="w-full flex bg-white px-5">
          <View className="items-center">
            <Text className="text-3xl font-bold text-[#2486ff] pb-3">
              Register
            </Text>
            <Text className="text-sm font-semibold text-slate-500">
              Create new account to access
            </Text>
          </View>
          <View className="mt-5">
            <Text className="text-xs text-slate-800">Full Name</Text>
            <View className="flex-row items-center bg-white px-3 border border-slate-500 rounded-lg mt-1">
              <Ionicons name="person" size={18} color="#94a3b8" />
              <TextInput
                placeholder="Full Name"
                onChangeText={(value) => setUserName(value)}
                className="w-full p-3"
              />
            </View>
          </View>
          <View className="mt-3">
            <Text className="text-xs text-slate-800">Email Address</Text>
            <View className="flex-row items-center bg-white px-3 border border-slate-500 rounded-lg mt-1">
              <Ionicons name="mail" size={18} color="#94a3b8" />
              <TextInput
                placeholder="Email Address"
                onChangeText={(value) => setEmail(value)}
                className="w-full p-3"
              />
            </View>
          </View>
          <View className="mt-3 mb-7">
            <Text className="text-xs text-slate-800">Password</Text>
            <View className="flex-row items-center bg-white px-3 border border-slate-500 rounded-lg mt-1">
              <Fontisto name="locked" size={18} color="#94a3b8" />
              <TextInput
                placeholder="Password"
                onChangeText={(value) => setPassword(value)}
                secureTextEntry={true}
                className="w-full p-3"
              />
            </View>
          </View>

          <TouchableOpacity onPress={OnRegister}>
            <LinearGradient
              colors={["#00c6ff", "#2486ff"]}
              className="w-full items-center py-[10] mt-1 rounded-lg"
            >
              <Text className="text-white text-base font-bold text-center">
                Register
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <View className="items-center mt-2">
            <Text className="text-slate-600 text-sm justify-center">
              Already have an account?{" "}
              <TouchableOpacity onPress={() => navigation.push("Login")}>
                <Text className="text-[#2486ff] font-bold top-1">Log In</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Register;
