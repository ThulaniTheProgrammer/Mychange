import { createClient } from '@supabase/supabase-js';
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import 'react-native-url-polyfill/auto'
import tw from 'twrnc';
import CustomHeader from '../../screens/components/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { update } from '@supabase/supabase-js';
import { useNavigation } from '@react-navigation/native';
import CustomerLogin from './CustomerLogin';

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpaXF5YmFhY2ttdGluZ2ZjeXR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ0NTU5MDcsImV4cCI6MjAyMDAzMTkwN30.F2xMhQsJ-592Xp11RfCD2a15EKApU5oaMnjJkMAa7ho';
const supabaseUrl = 'https://uiiqybaackmtingfcytx.supabase.co';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function CustomerSignUpHome() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const handleSignUp = async () => {
        try {
            const { user, error } = await supabase.auth.signUp({
                email,
                password,
            });

           

            if (error) {
                console.error(error);
                return;
            }
           

            console.log('Sign up successful!');
            navigation.navigate('CustomerLogin');
            
        } catch (error) {
            alert(error.message);
            console.error(error);
        }
    };

    return (
        <SafeAreaView>
            <CustomHeader />
        <View style={tw`items-center justify-center flex mt-10`}>
            <TextInput style={tw`bg-[#007EBC] w-90 flex mb-8   text-center text-3xl font-bold text-4 text-white rounded-xl   flex justify-center p-5 text-center  `}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput style={tw`bg-[#007EBC] w-90 flex mb-8   text-center text-3xl font-bold text-4 text-white rounded-xl   flex justify-center p-5 text-center  `}
                placeholder="Full Name"
                value={fullname}
                onChangeText={setFullname}
            />
            <TextInput  style={tw`bg-[#007EBC] w-90 flex mb-8   text-center text-3xl font-bold text-4 text-white rounded-xl   flex justify-center p-5 text-center  `}
                
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TextInput  style={tw`bg-[#007EBC] w-90 flex mb-8   text-center text-3xl font-bold text-4 text-white rounded-xl   flex justify-center p-5 text-center  `}
                
                placeholder="Phone"
                value={phone}
                onChangeText={setPhone}
            />
            <Button title="Sign Up" onPress={handleSignUp} />
        </View>
        </SafeAreaView>
    );
}
