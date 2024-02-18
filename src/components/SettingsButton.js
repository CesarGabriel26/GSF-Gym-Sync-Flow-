import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import { GlobalStyles } from "../style/style";
import { ButtonStyles } from '../style/style';

export default function SettingButton(param) {
    
    const SecretText = () => {

        let TextToReturn = "" 

        for (let index = 0; index < param.text.trim().length; index++) {
            TextToReturn += "."
        }

        return TextToReturn
    }

    return (

        <TouchableOpacity onPress={param.onPress} style={[ButtonStyles.Settings, param.style]} title="SignIn">
            <View>
                {param.icon && (
                    <Ionicons name={param.icon} style = {{margin : 10}} size={30} color="black" />
                )}
            </View>
            <View style = {{ flex : 1 ,justifyContent: 'center', alignItems : 'flex-start', paddingRight : 5}}>
                {param.title && (
                    <Text style={[ButtonStyles.SettingsText,{ marginLeft : 3, fontSize : 12 }]} > {param.title} </Text>
                )}

                
                
                <Text style={[ButtonStyles.SettingsText,{ fontSize : 20 }]} > 
                    {param.secret ? SecretText() : param.text}
                </Text>
            </View>
            <View>
                <Ionicons name={'chevron-forward'} style = {{margin : 10}} size={30} color="black" />
            </View>
        </TouchableOpacity>

    )
}