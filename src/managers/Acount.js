import * as React from 'react';

import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../pages/SingIn';
import SingUpScreen from '../pages/SingUp';



const Stack = createNativeStackNavigator();

export default function AcountScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator
         screenOptions={{
            headerShown: false,
        }}
      >
        <Stack.Screen name="SingIn" component={SignInScreen} />
        <Stack.Screen name="SingUp" component={SingUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
