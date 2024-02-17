import React from "react";
import { Text, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CustomLightTheme } from "../style/theme";
import { GlobalStyles } from "../style/style";
import { Ionicons } from '@expo/vector-icons';


export default function NetWorkErrorScreen() {
  const [DailyGoals, SetDailyGoals] = React.useState(0);

  
  
  return (
    <View style={{ flex: 1}} theme={CustomLightTheme}>
      <LinearGradient style={GlobalStyles.GradiantContainer} colors={CustomLightTheme.colors.Grad} >
        <Text style={{fontSize : 20, color : CustomLightTheme.colors.White}}>Ops</Text>
        <Ionicons name={'wifi-outline'} size={150} color="white" />
        <Text style={{fontSize : 20, padding : 20, textAlign : 'center', color : CustomLightTheme.colors.White}}>Parece que você ñ esta conectado a internet</Text>

      </LinearGradient>
    </View>
  );
}