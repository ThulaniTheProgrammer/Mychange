import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from '../../screens/Home';
import RetailHome from './RetailHome';
import { Entypo } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MarketHome from '../../screens/MarketHome';
import { useNavigation } from '@react-navigation/native';



export default function MychangeButton() {
  const navigation = useNavigation()
  return (
    
    <View style={tw `justify-center items-center flex mb-8 `}>
     <TouchableOpacity  onPress={() => navigation.navigate(CustomerLogin)}>
      <Text>hhh</Text>
    </TouchableOpacity>

<View style={[tw `relative rounded-2xl h-15  w-full bg-white px-4`,styles.button]}>
    <TouchableOpacity  onPress={() => navigation.navigate()}><Entypo name="home" size={24} color="black" /></TouchableOpacity>
    <TouchableOpacity ><Entypo name="shopping-cart" size={24} color="black" onPress={() => navigation.navigate(MarketHome)} /></TouchableOpacity>
    <TouchableOpacity><Ionicons name="notifications" size={24} color="black" /></TouchableOpacity>

   
</View>
</View>
  )
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        flexDirection: 'row',
        padding: 4,
        alignItems: 'center',
        justifyContent: 'space-between',
         
        }
})