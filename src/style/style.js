import { StyleSheet } from "react-native-web";

export const GlobalStyles = StyleSheet.create({
    GradiantContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },

    SideToSideContainer : { 
        flexDirection: 'row',
    },

    Space_T_B : {
        marginBottom: 12,
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
        minWidth: '50%',
        margin: 12,
        borderBottomWidth: 1,
        paddingLeft: 10,
        outlineStyle: 'none'
    },
    
});

export const ButtonStyles = StyleSheet.create({
    
    Primarry : {
        borderRadius : 10
    }

});
