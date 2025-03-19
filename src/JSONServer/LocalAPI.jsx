import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import * as ImagePicker from "expo-image-picker";

const LocalAPI = () => {
  // start image Picker =====================
  const [image, setImage] = useState();
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  // end image Picker =====================
  return (
    <View className="flex-1 bg-cyan-50 p-5">
      <View className="w-[90%] mx-auto bg-green-200 mt-3 p-5 rounded-lg">
        <Text className="text-lg text-blue-500 font-bold text-center pb-3">
          Anggota JSON Server
        </Text>
        <View>
          {/* image Picker */}
          <View className="items-center my-1">
            <View className="justify-center items-center">
              <View className="w-32 h-32 bg-white justify-center items-center border border-slate-200 rounded-full">
                {image ? (
                  <Image
                    source={{ uri: image }}
                    className="w-32 h-32 rounded-full"
                  />
                ) : (
                  <FontAwesome5 name="user-tie" size={90} color="#cbd5e1" />
                )}
              </View>
              <TouchableOpacity
                onPress={pickImage}
                className="absolute bottom-0 left-20 bg-white/90 justify-center items-center p-[6] rounded-full "
              >
                <Ionicons name="camera-outline" size={20} color="red" />
              </TouchableOpacity>
            </View>
          </View>

          {/* form data */}
          <View>
            <View
              style={{ elevation: 3 }}
              className="flex-row items-center bg-white px-4 my-1 rounded-md"
            >
              <Ionicons name="person-outline" size={17} color="gray" />
              <TextInput placeholder="Full Name" className="w-full pl-2" />
            </View>
            <View
              style={{ elevation: 3 }}
              className="flex-row items-center bg-white px-4 my-1 rounded-md"
            >
              <Ionicons name="mail-outline" size={17} color="gray" />
              <TextInput placeholder="Email Address" className="w-full pl-2" />
            </View>
            <View
              style={{ elevation: 3 }}
              className="flex-row items-center bg-white px-4 my-1 rounded-md "
            >
              <Ionicons name="location-outline" size={17} color="gray" />
              <TextInput
                placeholder="City / Location"
                className="w-full pl-2"
              />
            </View>
            <TouchableOpacity
              style={{ elevation: 3 }}
              className="bg-blue-500 py-2 rounded-md mt-3"
            >
              <Text className="text-white text-base font-bold text-center">
                Simpan
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="border-b my-5"></View>

      {/* anggota peserta */}
      <View>
        <View
          style={{ elevation: 3 }}
          className="flex-row justify-between items-center bg-white py-2 px-3 my-1 rounded-md"
        >
          <TouchableOpacity className="flex-row items-center">
            <Image
              source={require("../../assets/1.jpg")}
              className="w-14 h-14 rounded-full"
            />
            <View className="pl-2">
              <Text className="text-base text-slate-700 font-semibold">
                Safwan
              </Text>
              <Text className="text-xs text-slate-500">safwan@gmail.com</Text>
              <Text className="text-xs text-slate-500">Bireuen</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text className="border border-red-500 text-[11px] font-semibold text-red-500 text-center py-1 px-3 rounded">
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LocalAPI;
