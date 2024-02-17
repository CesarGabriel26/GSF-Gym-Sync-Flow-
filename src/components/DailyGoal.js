import React from "react";
import { Text, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CustomLightTheme } from "../style/theme";


export default function DailyGoal(params) {
    return (
        <View style={{alignItems : 'center', backgroundColor : CustomLightTheme.colors.White, borderRadius : 20, padding : 10, display : 'flex', flexDirection : 'row'}}>

            <LinearGradient
                colors={CustomLightTheme.colors.Grad}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                    width : 100,
                    height : 100,
                    borderRadius: 50,
                }}
            >
                <View style={{
                    borderRadius: 50,
                    flex: 1,
                    margin: 5,
                    backgroundColor: CustomLightTheme.colors.White,
                    justifyContent: 'center',
                    alignItems : 'center'
                }}>
                    <LinearGradient
                        colors={CustomLightTheme.colors.Grad}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{
                            width : 70,
                            height : 70,
                            borderRadius: 50,
                        }}
                    >
                        <View style={{
                            borderRadius: 50,
                            flex: 1,
                            margin: 5,
                            backgroundColor: CustomLightTheme.colors.White,
                            justifyContent: 'center',
                            alignItems : 'center'
                        }}>
                            <Text style = {{fontSize : 35, color : CustomLightTheme.colors.Black}} >{params.value}</Text>
                        </View>
                    </LinearGradient>
                </View>
            </LinearGradient>
                
            <View style={{marginLeft : 20}}>
                <Text style={{fontSize : 20}}>
                    Dias sem perder 
                </Text>
                <Text style={{fontSize : 20}}>
                    O ritimo
                </Text>
                <Text style={{fontSize : 12}}>
                    Voce esta indo bem, continue assim!
                </Text>
            </View>

        </View>
    )
}