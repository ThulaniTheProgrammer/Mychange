import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../../screens/components/header'
import tw from 'twrnc'
import { View, Text } from 'react-native'
import MychangeButton from './MychangeButtons'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';


export default function RetailHome({navigation}) {
  return (
   <SafeAreaView style={tw`bg-neutral-950 px-5 h-full `}>
    <CustomHeader></CustomHeader>
    <Text style={tw` text-white font-bold text-2xl mb-2 `}>My Change </Text>
    <View  style={tw`bg-[#007EBC]  h-55  rounded rounded-2xl text-white font-bold px-2`} >
        <View style={tw`flex flex-row justify-between  font-bold self`}>
<Text style={tw` text-white font-bold text-xl  `} >Balance </Text>
<Text style={tw` text-white font-bold `} >$5000.00 </Text>
</View>
<Text style={tw` text-white font-bold text-2xl font-medium `}>TM Stores </Text>

<View style={tw`flex-1 justify-between`}>
      <View style={tw`flex-1`}>
      
      </View>

      <View style={tw`self`}>
    
      <View style={tw`self flex flex-row justify-between mb-2`}>
<Text style={tw` text-white font-bold text-2xl  `}>Total </Text>
<Text style={tw` text-white font-bold `}>$500.00 </Text>
</View>

      </View>
    </View>




    </View>
    
    <Text style={tw` text-white font-bold  mt-20 text-xl `}>Make Transactions</Text>
<View  style={tw`bg-[#007EBC] justify-between flex-row items-center flex mt-4  h-16 rounded rounded-xl text-white font-bold px-2`} >
 
  <Text style={tw` text-white text-2xl font-medium `}>Send</Text>
  <Ionicons name="md-qr-code-outline" size={50} color="white" />
    </View>

    <View  style={tw`bg-[#007EBC] justify-between flex-row items-center flex mt-4  h-16 rounded rounded-xl text-white font-bold px-2`} >
 
  <Text style={tw` text-white text-2xl font-medium `}>Receive</Text>
  <Ionicons name="md-qr-code-outline" size={50} color="white" />
    </View>


<View style={tw`flex-1 justify-between`}>
      <View style={tw`flex-1`}>
      
      </View>

      <View style={tw`self`}>
      <MychangeButton  style={tw` `}/>
      </View>
    </View>

   </SafeAreaView>
  )
}
