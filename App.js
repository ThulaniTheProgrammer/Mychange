// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';
import CustomerLogin from './pages/Customer/CustomerLogin';
import CustomerSighnUp from './pages/Customer/CustomerSighnUp';
import RetailHome from './pages/buttons/RetailHome';
import RetailLogin from './pages/Retail/RetailLogin';
import RetailSighnUp from './pages/Retail/RetailSighnUp';
import CustomerHome from './pages/Customer/CustomerHome';
import MychangeButton from './pages/buttons/MychangeButtons';
import MarketHome from './screens/MarketHome';
import CustomerSignUpHome from './pages/Customer/CustomerSignUpHome';
import RetailSighnUpHome from './pages/Retail/RetailSignUpHome';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" options={{headerShown: false}} component={DetailsScreen} />
        <Stack.Screen name="MarketHome" options={{headerShown: false}} component={ MarketHome} />
           <Stack.Screen name="RetailHome}" options={{headerShown: false}} component={RetailHome} />
        <Stack.Screen name="CustomerHome " options={{headerShown: false}} component={CustomerHome } />
       
        <Stack.Screen name="RetailSighnUpHome" options={{headerShown: false}} component={RetailSighnUpHome} />
        <Stack.Screen name="CustomerSignUpHome" options={{headerShown: false}} component={CustomerSignUpHome} />
        <Stack.Screen name="CustomerSighnUp" options={{headerShown: false}} component={CustomerSighnUp} />
        <Stack.Screen name="CustomerLogin" options={{headerShown: false}} component={CustomerLogin} />
        <Stack.Screen name="MychangeButton" options={{headerShown: false}} component={MychangeButton} />

        <Stack.Screen name="RetailSighnUp" options={{headerShown: false}} component={RetailSighnUp} />
        <Stack.Screen name="RetailLogin" options={{headerShown: false}} component={RetailLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;