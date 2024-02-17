import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, TextInput, Pressable } from 'react-native';
import { GlobalStyles } from "../style/style";

export default function SafeTextInput(param) {

    switch (param.Type) {
        case "password":
            return (
                <View style={[{ position: 'relative' }, GlobalStyles.Space_T_B]}>
                    {
                        param.showPassWordPress && (
   
                            <Pressable style={{ position: 'absolute', right: 10, top: 10, display : 'flex', alignItems : 'center', justifyContent : 'center', zIndex : 99 }} onPress={param.showPassWordPress}>
    
                                <Ionicons name={param.showPassWord ? "eye-off-outline" : "eye-outline"} size={20} color="black" />
            
                            </Pressable>
                          
                        )
                    }
                    
                    <TextInput style={[GlobalStyles.input]} secureTextEntry={!param.showPassWord} placeholder={param.placeholder} onChangeText={param.onChangeText} value={param.value} />
                </View>
            )
    
        default:
            return (

                <TextInput style={[GlobalStyles.input,GlobalStyles.Space_T_B]} placeholder={param.placeholder} onChangeText={param.onChangeText} value={param.value}/>
        
            );
    }

}
