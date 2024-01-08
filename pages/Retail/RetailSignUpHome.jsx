import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../../screens/components/header';
import TextField from '../../screens/components/button';
import tw from 'twrnc';
import { View } from 'react-native';
import { Text } from 'react-native';
import RetailSighnUp from './RetailSighnUp';

export default function RetailSighnUpHome({navigation}) {
  return (
   <SafeAreaView style={tw`bg-neutral-800 px-2 h-full`}>
    
<CustomHeader/>

<View style={tw`items-center justify-center flex mt-2r`}>
<Text style={tw`items-center justify-center text-xl font-bold text-white flex mb-5`}>Create an account</Text>

<TextField  name='Retail Name'/>
<TextField  name='Email'/>
<TextField  name='Phone Number'/>
<TextField  name='Password'/>
<TextField  name='Confirm Password'/>
<View style={tw`items-center justify-center flex mt-10 font-bold`}>
<Text  onPress={() => navigation.navigate( RetailSighnUp)}
      style={tw`bg-[#007EBC] w-90 flex   text-center text-3xl font-bold text-4 text-white rounded-xl   flex justify-center p-5 text-center  `}>Sign Up</Text>

       
    
</View>
</View>
   </SafeAreaView>
  )
}
;