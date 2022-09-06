import React from 'react';
import { Text, View } from 'react-native';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import NasaState from './context/NasaState'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


let App = () => {
  let Stack = createNativeStackNavigator();
  return (
    <NasaState>
    <NavigationContainer>
      <Stack.Navigator initialRouterName="Screen1">
        <Stack.Screen name="Screen1" component={Slide1} />
        <Stack.Screen name="GoBack" component={Slide2} />
      </Stack.Navigator>
    </NavigationContainer>
    </NasaState>
    
  );
};
export default App;
