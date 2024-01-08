import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../../screens/components/header';
import TextField from '../../screens/components/button';
import tw from 'twrnc';
import { View } from 'react-native';
import { Text } from 'react-native';
import CustomerSighnUp from './CustomerSighnUp';
import CustomerHome from './CustomerHome';
import CustomerSignUpHome from './CustomerSignUpHome';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { TextInput } from 'react-native';



const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpaXF5YmFhY2ttdGluZ2ZjeXR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ0NTU5MDcsImV4cCI6MjAyMDAzMTkwN30.F2xMhQsJ-592Xp11RfCD2a15EKApU5oaMnjJkMAa7ho';
const supabaseUrl = 'https://uiiqybaackmtingfcytx.supabase.co';
const supabase = createClient(supabaseUrl, supabaseKey);


export default function CustomerLogin({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
        const { user, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

       

        if (error) {
            console.error(error);
            alert(error.message);
            return;
        }
       

        console.log('Sign up successful!');
        navigation.navigate('CustomerSighnUp');
        
    } catch (error) {
        alert(error.message);
        console.error(error);
    }
};




  return (
   <SafeAreaView style={tw`bg-neutral-800 px-2 h-full`}>
    
<CustomHeader/>

<View style={tw`items-center justify-center flex mt-2r`}>
<Text style={tw`items-center justify-center text-xl font-bold text-white flex mb-5`}>WELCOME</Text>
<Text style={tw`items-center justify-center text-xl font-bold text-white flex mb-4`}>Log in to your account</Text>


<TextInput  style={tw`bg-[#007EBC] w-90 flex mb-8   text-center text-3xl font-bold text-4 text-white rounded-xl   flex justify-center p-5 text-center  `}
                
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
              <TextInput style={tw`bg-[#007EBC] w-90 flex mb-8   text-center text-3xl font-bold text-4 text-white rounded-xl   flex justify-center p-5 text-center  `}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
<View style={tw`items-center justify-center flex mt-10 font-bold`}>
<Text onPress={handleSignIn}

      style={tw`bg-[#007EBC] w-90 flex  mt-12 text-center text-3xl font-bold text-4 text-white rounded-xl   flex justify-center p-5 text-center  `}>Log In</Text>

<Text style={tw`text-[#ADADAD] text-xl mt-10 text-neutral-400 ` }>Forgot Password</Text>
        <View style={tw`flex flex-row mt-2`}>
          
        <Text style={tw` text-white ml-8 text-xl text-white-800 ` }>Do you have account? </Text>
        <Text style={tw`font-bold text-white text-xl ` } onPress={() => navigation.navigate('CustomerSignUpHome')}>Sign up</Text>
        </View>
    
</View>
</View>
   </SafeAreaView>
  )
}
