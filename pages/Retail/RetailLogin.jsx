import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../../screens/components/header';
import TextField from '../../screens/components/button';
import tw from 'twrnc';
import { View } from 'react-native';
import { Text } from 'react-native';
import RetailHome from '../buttons/RetailHome';
import RetailSighnUp from './RetailSighnUp';
import RetailSighnUpHome from './RetailSignUpHome';


export default function RetailLogin({navigation}) {
  return (
   <SafeAreaView style={tw`bg-neutral-800 px-2 h-full`}>
    
<CustomHeader/>

<View style={tw`items-center justify-center flex mt-2r`}>
<Text style={tw`items-center justify-center text-xl font-bold text-white flex mb-5`}>WELCOME</Text>
<Text style={tw`items-center justify-center text-xl font-bold text-white flex mb-4`}>Log in to your account</Text>
<TextField  name='UserName'/>
<TextField  name='Password'/>
<View style={tw`items-center justify-center flex mt-10 font-bold`}>
<Text  onPress={() => navigation.navigate(RetailSighnUp)}
      style={tw`bg-[#007EBC] w-90 flex  mt-12 text-center text-3xl font-bold text-4 text-white rounded-xl   flex justify-center p-5 text-center  `}>Log In</Text>

<Text style={tw`text-[#ADADAD] text-xl mt-10 text-neutral-400 ` }>Forgot Password</Text>
        <View style={tw`flex flex-row mt-2`}>
          
        <Text style={tw` text-white ml-8 text-xl text-white-800 ` }>Do you have account? </Text>
        <Text style={tw`font-bold text-white text-xl ` } onPress={() => navigation.navigate('RetailSighnUpHome')}>Sign up</Text>
        </View>
    
</View>
</View>
   </SafeAreaView>
  )
}
