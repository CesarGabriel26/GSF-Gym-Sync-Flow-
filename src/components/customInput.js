import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import { GlobalStyles } from "../style/style";
import { CustomLightTheme } from "../style/theme";

export default function CustomInput() {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');

    return (
        <SafeAreaView>
            <TextInput
                style={GlobalStyles.input}
                placeholder="E-mail"
                onChangeText={onChangeText}
                value={text}
            />
            <TextInput
                style={GlobalStyles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Password"
                keyboardType="numeric"
            />
        </SafeAreaView>
    );
}
