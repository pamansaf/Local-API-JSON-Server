import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const LocalAPI = () => {
  return (
    <View className="flex-1 bg-cyan-50 p-5">
      <Text className="text-xs">Local API (JSON SERVER)</Text>
      <Text className="text-lg text-blue-500 font-bold text-center py-3">
        Anggota Belajar JSON Server
      </Text>
      <View
        style={{ elevation: 3 }}
        className="flex-row items-center bg-white px-4 py-1 my-1 rounded-md"
      >
        <Ionicons name="person-outline" size={17} color="gray" />
        <TextInput placeholder="Full Name" className="w-full pl-2" />
      </View>

      <View
        style={{ elevation: 3 }}
        className="flex-row items-center bg-white px-4 py-1 my-1 rounded-md"
      >
        <Ionicons name="mail-outline" size={17} color="gray" />
        <TextInput placeholder="Email Address" className="w-full pl-2" />
      </View>
      <View
        style={{ elevation: 3 }}
        className="flex-row items-center bg-white px-4 py-1 my-1 rounded-md "
      >
        <Ionicons name="location-outline" size={17} color="gray" />
        <TextInput placeholder="City / Location" className="w-full pl-2" />
      </View>

      <TouchableOpacity
        style={{ elevation: 3 }}
        className="bg-blue-500 py-3 rounded-md mt-3"
      >
        <Text className="text-white text-base font-bold text-center">
          Simpan
        </Text>
      </TouchableOpacity>

      <View className="border-b my-5"></View>

      {/* anggota peserta */}
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
  );
};

export default LocalAPI;
