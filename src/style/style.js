import { StyleSheet } from "react-native-web";
import { CustomLightTheme } from "./theme";

export const GlobalStyles = StyleSheet.create({
    GradiantContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },

    SideToSideContainer : { 
        flexDirection: 'row',
    },

    Space_T_B : {
        marginBottom: 12,
        marginTop: 12,
    },

    Space_B : {
        marginBottom: 12,
    },

    Space_T : {
        marginTop: 12,
    },

    Bottomspace : {
        flex: 1,
        backgroundColor: 'red',
    },

    Logo: {
        width: 10,
        height: 10,
        marginBottom : 5,
    },

    input: {
        height: 40,
        minWidth: '75%',
        borderBottomWidth: 1,
        paddingLeft: 10,
    },
    
});

export const ButtonStyles = StyleSheet.create({
    
    Primarry : {
        padding: 10,
        backgroundColor: CustomLightTheme.colors.PrimaryButtonColor,
        borderRadius: 10,
        borderWidth: 1,
    },

    PrimarryText : {
        color: CustomLightTheme.colors.White
    },

    Settings : {
        diplay: 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        minHeight : 60,
        padding: 10,
        backgroundColor: CustomLightTheme.colors.White,
        borderRadius: 10,
    },

    SettingsText : {
        color: CustomLightTheme.colors.Black
    },

});
