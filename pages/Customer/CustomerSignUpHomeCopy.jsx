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
import { useState } from 'react';






export default function CustomerSignUpHome({navigation}) {

  const [formData,setFormData] = useState({
    fullName:'',email:'',password:''
  })

  console.log(formData)

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }

    })

  }

  async function handleSubmit(e){
    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.fullName,
            }
          }
        }
      )
      if (error) throw error
      alert('Check your email for verification link')

      
    } catch (error) {
      alert(error)
    }
  }

      
      
      


  return (
   <SafeAreaView style={tw`bg-neutral-800 px-2 h-full`}>
    
<CustomHeader/>

<View style={tw`items-center justify-center flex mt-2r`}>
<Text style={tw`items-center justify-center text-xl font-bold text-white flex mb-5`}>Create an account</Text>

<form onSubmit={handleSubmit}>
<TextField  
 input 
          placeholder='Fullname'
          name='fullName'
          onChange={handleChange} className="w-full p-2 border border-gray-400 bg-slate-800  rounded-xl" />
<TextField
input 
          placeholder='Email'
          name='email'
          onChange={handleChange} className="w-full p-2 border border-gray-400 bg-slate-800  rounded-xl" />
<TextField
input 
          placeholder='Password'
          name='password'
          onChange={handleChange} className="w-full p-2 border border-gray-400 bg-slate-800  rounded-xl" />

   <View>
      <Text><button type="submit">Sign Up</button></Text>
      </View>

  
</form>


    
</View>
   
   </SafeAreaView>
  )
}
;

