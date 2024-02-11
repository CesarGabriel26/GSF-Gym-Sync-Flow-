import React from "react";
import { Text, View, Button, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CustomLightTheme } from "../style/theme";
import { GlobalStyles, ButtonStyles } from "../style/style";
import CustomInput from "../components/customInput";

export default function SignInScreen({navigation}) {
  
  return (
    <View style={{ flex: 1}}>
      <LinearGradient style={GlobalStyles.GradiantContainer} colors={CustomLightTheme.colors.Grad} >
        <Image style={GlobalStyles.tinyLogo} source={CustomLightTheme.logo}/>

        <CustomInput />

        <View >
          <Button style={{ borderRadius : 10 }} color={CustomLightTheme.colors.PrimaryButtonColor} title="SignIn" onPress={() => navigation.navigate('SingUp')}/>
        </View>

        <View style={GlobalStyles.Space_T_B}>
          <Pressable style={GlobalStyles.SideToSideContainer} >
            <Text>Não possui uma conta?</Text>
            <Text> Cadastre-se</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
}
