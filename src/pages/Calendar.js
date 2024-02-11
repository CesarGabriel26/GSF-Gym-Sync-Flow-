import React from "react";
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CustomLightTheme } from "../style/theme";
import { GlobalStyles } from "../style/style";

export default function CalendarScreen() {
    return (
        <View style={{ flex: 1}} theme={CustomLightTheme}>
            <LinearGradient style={GlobalStyles.GradiantContainer} colors={CustomLightTheme.colors.Grad} >
                <Text>Calendar!</Text>
            </LinearGradient>
        </View>
    );
}