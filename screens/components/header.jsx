import React, { useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import tw from "twrnc";
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const CustomHeader = ({hide_back_button}) => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={[tw`relative  w-full mt-2`, styles.header]}>
      <ExpoStatusBar style="auto" />
      <View
        // style={tw`flex w-full absolute bg-red-600 top-10 p-4 flex-row items-center justify-between`}
        style={[tw` mx-2 flex-row absolute`, styles.belowHeader]}
      >
        {
          hide_back_button ? (null) :  <TouchableOpacity onPress={() => navigation.goBack()} style={tw`bg-white rounded-full p-2`}>
          <Entypo name="chevron-left" size={24} color="#007EBC" />
          </TouchableOpacity>
        }
       
        
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingVertical: 20,
    overflow: "hidden",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  belowHeader: {
    top: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header__colorItem: {
   
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginRight: 10,
    flex: 1,
  },
  header__nonecolrItem: {
   
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginRight: 10,
  },
  header__search: {
    
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 50,
    marginRight: 10,
    flex: 1,
  },
});