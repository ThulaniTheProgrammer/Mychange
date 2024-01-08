import * as React from 'react';
import { Button, View, Text, TouchableOpacity,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './Details';
import tw from 'twrnc';
import CustomerLogin from '../pages/Customer/CustomerLogin';
import RetailLogin from '../pages/Retail/RetailLogin';


export default   function HomeScreen({ navigation }) {
  return (
    <View  style={tw`flex items-center justify-center bg-[#0F2592] h-full`} >
      
   <View style={tw`flex items-center justify-center bg-[#0F2592] mt-80`}>
     <Image source={require('../assets/mychange.jpg')} resizeMode="cover" style={tw ` rounded-2xl w-40 h-30 m-2`}/>
     
     </View>
  
      
     
<View style={tw`flex-1 justify-between`}>
      <View style={tw`flex-1`}>
      
      </View>

      <View style={tw`self`}>
   
      <TouchableOpacity  onPress={() => navigation.navigate(RetailLogin)}>
        <Text style={tw`rounded-2xl bg-[#007EBC] text-sm text-white py-4 px-1 w-80 text-center font-medium text-xl`}>Retailer</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => navigation.navigate(CustomerLogin)}>
        <Text style={tw`rounded-2xl bg-[#007EBC] text-sm text-white py-4 px-4 my-8 w-full px-1 w-80 text-center font-medium text-xl`}>Customer</Text>
        </TouchableOpacity>
     


      </View>
    </View>



    </View>
  );
}

// ... other code from the previous section