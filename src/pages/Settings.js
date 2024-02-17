import * as React from 'react';
import { Text, View, Modal, Pressable} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CustomLightTheme } from "../style/theme";
import { GlobalStyles } from "../style/style";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import i18n from '../managers/LanguageManager';

import Header from "../components/Head";
import SettingButton from "../components/SettingsButton";
import { registerForPushNotifications, sendNotification } from "../components/Notificator";


export default function SettingsScreen({ route }) {
    const [LanguageModalVisible, setLanguageModalVisible] = React.useState(false);

    const { t, i18n } = useTranslation();

    const changeLanguage = async (lng) => {
        await AsyncStorage.setItem('language', lng);
        i18n.changeLanguage(lng);
    };

    return (
        <View style={{ flex: 1}} theme={CustomLightTheme}>
            <LinearGradient style={GlobalStyles.GradiantContainer} colors={CustomLightTheme.colors.Grad} >

                <Header />

                <View style={{flex : 8, width : '100%', padding : 10}}>
                
                    <SettingButton onPress={()=>{

                        setLanguageModalVisible(true)
                    
                    }} style={GlobalStyles.Space_T_B} icon="language-outline" title={t('language')} text={t('laguage_code')} />
                    
                    <SettingButton onPress={()=>{alert("Profile")}} style={GlobalStyles.Space_T_B} icon="person-outline" title="Profile" text="pfp,name,email..." />
                    
                    <SettingButton onPress={()=>{
                        alert("NOTIFY")

                    }} style={GlobalStyles.Space_T_B} icon="notifications-outline" title="Notification" text="Email" />
                   
                    <SettingButton onPress={()=>{alert("Privacy")}} style={GlobalStyles.Space_T_B} icon="lock-closed-outline" title="Privacy" text="Terms, Privacy" />
                    
                    <SettingButton onPress={()=>{alert("Support")}} style={GlobalStyles.Space_T_B} icon="headset-outline" title="Support" text="24/7 Customer" />
                    
                    <SettingButton onPress={()=>{
                        route.params.LogOutFunction()
                        AsyncStorage.removeItem('userToken')
                    
                    }} style={GlobalStyles.Space_T_B} icon="log-out-outline" title="LogOut" text="LogOut" />

                </View>

                <View>
                    <Modal animationType="slide" transparent={true} visible={LanguageModalVisible}
                        onRequestClose={() => {
                            setLanguageModalVisible(!LanguageModalVisible);
                    }}>

                        <View style={{ flex : 1, justifyContent : 'center', alignItems : 'center' }} >
                            <View style={{ flex : 1, width : '100%', backgroundColor : CustomLightTheme.colors.ModalBg, padding : 15, borderRadius : 20 }} >

                                <SettingButton onPress={()=>{changeLanguage('en')}} style={GlobalStyles.Space_T_B} icon="headset-outline" text={t('welcome')} />
                                <SettingButton onPress={()=>{changeLanguage('pt_br')}} style={GlobalStyles.Space_T_B} icon="headset-outline" text={t('welcome')} />

                                <Pressable onPress={() => setLanguageModalVisible(!LanguageModalVisible)}>
                                    <Text>Hide Modal</Text>
                                </Pressable>

                            </View>
                        </View>

                    </Modal>
                </View>

            </LinearGradient>
        </View> 
    );
}   
