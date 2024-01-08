import React from 'react'
import { Text, View,Image } from 'react-native'
import CustomHeader from './components/header'
import tw from 'twrnc'
import TextField from './components/button'
import MychangeButton from '../pages/buttons/MychangeButtons'

export default function MarketHome() {
  return (
  <View style={tw`bg-black h-full px-4`}>
    <CustomHeader></CustomHeader>
    <View >
<TextField></TextField>
      </View>

<View>
  <Text style={tw`bg-black text-white `}>
  Top Recommed
  </Text>
 
</View>
<View style={tw`flex flex-row justify-between `}>
  <View style={tw`bg-blue-100 text-black rounded rounded-xl h-60 w-1/2 mr-2`}>
 
  </View>
  <View style={tw`bg-blue-100 text-black rounded rounded-xl h-60 w-1/2 `}>
 
  </View>
</View>
<View style={tw`flex flex-row relative`}>
<Image source={require('../assets/mychange.jpg')} resizeMode="cover" style={tw ` rounded-2xl w-1/4 h-20 mt-6 z-30 `}/>
   
<View style={tw`bg-blue-100 text-black rounded rounded-xl h-20 w-8/10 mt-6 flex items-center  justify-center  absolute left-16 z-20`}>
<Text style={tw`text-center font-bold flex  text-sm`}>My Change Featured Product</Text>
 </View>  

 </View>

 <View style={tw`flex flex-row justify-between mt-10 `}>
  <View style={tw`bg-blue-100 text-black rounded rounded-xl h-60 w-1/2 mr-2`}>
 
  </View>
  <View style={tw`bg-blue-100 text-black rounded rounded-xl h-60 w-1/2 `}>
 
  </View>
</View>
<MychangeButton></MychangeButton>
      </View>
  )
}
