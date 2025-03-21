import React, { useEffect, useState } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../HomeScreen";
import ImagePickerExample from "../ImagePicker";
import LocalAPI from "../JSONServer/LocalAPI";
import Login from "../CRUDfirabase/Authentication/Login";
import Register from "../CRUDfirabase/Authentication/Register";
import { auth } from "../../config/firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";

const StackNav = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  const [authenticated, setAuthenticated] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(uid);
      setAuthenticated(true);
      // ...
    } else {
      setAuthenticated(false);
      // User is signed out
      // ...
    }
  });

  useEffect(() => {
    if (authenticated == false) {
      navigation.navigate("Login");
    }
  }, [authenticated]);
  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{
        headerShown: true,
        statusBarColor: "#2486ff",

        headerStyle: {
          backgroundColor: "#2486ff",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 17,
        },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      {/* Authentication */}
      <Stack.Screen
        name="ImagePickerExample"
        component={ImagePickerExample}
        options={{
          headerShown: false,
          animation: "fade",
          animationDuration: 200,
        }}
      />
      <Stack.Screen
        name="LocalAPI"
        component={LocalAPI}
        options={{
          headerShown: false,
          animation: "fade",
          animationDuration: 200,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          animation: "fade",
          animationDuration: 200,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
          animation: "fade",
          animationDuration: 200,
        }}
      />
    </Stack.Navigator>
  );
};
export default StackNav;
