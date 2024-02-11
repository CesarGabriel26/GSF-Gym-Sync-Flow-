import React from "react";
import { Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CustomLightTheme } from "../style/theme";
import { GlobalStyles } from "../style/style";

export default function SingUpScreen({navigation}) {
  
  return (
    <View style={{ flex: 1}} theme={CustomLightTheme}>
      <LinearGradient style={GlobalStyles.GradiantContainer} colors={CustomLightTheme.colors.Grad} >
        <Button
        title="SingUp"
        onPress={() => navigation.navigate('SingIn')}
        />
      </LinearGradient>
    </View>
  );
}