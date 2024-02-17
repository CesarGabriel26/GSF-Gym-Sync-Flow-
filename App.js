import * as React from 'react';
import MainScreen from './src/managers/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './src/pages/SingIn';
import SingUpScreen from './src/pages/SingUp';
import { StatusBar } from 'react-native-web';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetWorkErrorScreen from './src/pages/NetWorkError';

const Stack = createNativeStackNavigator();

export default function App() {
  // AsyncStorage.removeItem('userToken')
  const [token, SetToken] = React.useState(false);
  const [conectedTOInternet, SetconectedTOInternet] = React.useState(false);
  

  const checkToken = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        const parsedToken = JSON.parse(userToken);
        SetToken(true);
      }
    } catch (error) {
      console.error('Erro ao recuperar token do AsyncStorage:', error);
    }
  };

  const checkInternetConnection = async () => {
    try {
      const state = await NetInfo.fetch();
      return state.isConnected;
    } catch (error) {
      console.error('Erro ao verificar conexão com a internet:', error);
      return false;
    }
  };

  React.useEffect(() => {
    checkToken();
    SetconectedTOInternet(checkInternetConnection())
  }, []);

  if (conectedTOInternet) {
    if (token) {
      return (
  
        <MainScreen LogOutFunction={()=>{
          SetToken(false)
        }} />
    
      );
    }else {
      return (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
          >
            <Stack.Screen name="SingIn" component={SignInScreen} initialParams={{ onLoginConfirmed: () => {SetToken(true)} }} />
            <Stack.Screen name="SingUp" component={SingUpScreen} />
          </Stack.Navigator>
          <StatusBar hidden={true} />
        </NavigationContainer>
      )
    }
  }else {

    setTimeout(() => {
      SetconectedTOInternet(checkInternetConnection())
    }, 1000);

    return (
      <NetWorkErrorScreen />
    )
  }

  
}