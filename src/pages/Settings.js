import * as React from 'react';
import { Text, View, Modal, Pressable} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CustomLightTheme } from "../style/theme";
import { GlobalStyles } from "../style/style";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import { Languages } from '../languages/languagesCodes';
import Header from "../components/Head";
import SettingButton from "../components/SettingsButton";
import ProfileModal from './SettingsPages/ProfileModal';


export default function SettingsScreen({ route }) {
    const { t, i18n } = useTranslation();
    
    const changeLanguage = async (lng) => {
        await AsyncStorage.setItem('language', lng);
        i18n.changeLanguage(lng);
    };

    const [LanguageModalVisible, setLanguageModalVisible] = React.useState(false);
    const [ProfileModalVisible, setProfileModalVisible] = React.useState(false);

    return (
        <View style={{ flex: 1}} theme={CustomLightTheme}>
            <LinearGradient style={GlobalStyles.GradiantContainer} colors={CustomLightTheme.colors.Grad} >

                <Header />

                <View style={{flex : 8, width : '100%', padding : 10}}>
                
                    <SettingButton onPress={()=>{setLanguageModalVisible(true)}} style={GlobalStyles.Space_T_B} icon="language-outline" title={t('language')} text={t('laguage_code')} />
                    
                    <SettingButton onPress={()=>{setProfileModalVisible(true)}} style={GlobalStyles.Space_T_B} icon="person-outline" title="Profile" text="pfp,name,email..." />
                    
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

                                <Pressable onPress={() => setLanguageModalVisible(!LanguageModalVisible)}>
                                    <Ionicons name={'caret-back-outline'} style = {{margin : 10}} size={30} color="black" />
                                </Pressable>

                                {
                                    Languages.map(lang => (
                                        <SettingButton
                                            key={lang.code}
                                            onPress={() => { changeLanguage(lang.code) }}
                                            style={GlobalStyles.Space_T_B}
                                            icon="language-outline"
                                            text={lang.name}
                                        />
                                    ))
                                }

                            </View>
                        </View>

                    </Modal>

                    <ProfileModal onRequestClose={() => setProfileModalVisible(!ProfileModalVisible)}  visible={ProfileModalVisible}/>
                    
                </View>

            </LinearGradient>
        </View> 
    );
}   
