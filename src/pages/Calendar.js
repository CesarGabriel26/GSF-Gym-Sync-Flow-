import React from "react";
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CustomLightTheme } from "../style/theme";
import { GlobalStyles } from "../style/style";


import Header from "../components/Head";
import MonthCalendar from "../components/calendar/monthCalendar";


export default function CalendarScreen() {
    return (
        <View style={{ flex: 1}} theme={CustomLightTheme}>
            <LinearGradient style={GlobalStyles.GradiantContainer} colors={CustomLightTheme.colors.Grad} >
                <Header />

                <View style={{flex : 8, width : '100%', padding : 10}}>
                    
                    <MonthCalendar />

                </View>

            </LinearGradient>
        </View>
    );
}