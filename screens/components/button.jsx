import React from 'react'
import { TextInput } from 'react-native'
import tw from 'twrnc'

export default function TextField(props) {
  return (
    
    <TextInput  placeholderTextColor="white" type="text"   placeholder={props.name} style={tw`bg-[#007EBC]  text-xl text-white placeholder-white rounded-xl    flex justify-center p-5  mb-8  text-center w-full  `}></TextInput>
  )
}
