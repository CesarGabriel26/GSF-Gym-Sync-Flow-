import React from "react";
import { Text, View, TouchableOpacity, Image, Pressable, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CustomLightTheme } from "../style/theme";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalStyles, ButtonStyles } from "../style/style";
import SafeTextInput from "../components/customInput";
import { loginUser } from "../managers/ApiManager";

export default function SignInScreen({ route, navigation }) {
  const [showPassWord, onChangeShowPassWord] = React.useState(false);
  const [Email, SetEmail] = React.useState('');
  const [Password, SetPassword] = React.useState('');

  React.useEffect(() => {
    if (route.params?.email) {
      SetEmail(route.params.email)
      SetPassword(route.params.password)
    }
  }, [route.params?.email]);

  const handleSubmitButton = () => {
    if (!Email) {
      alert('Please fill Email');
      return;
    }
    if (!Password) {
      alert('Please fill Password');
      return;
    }

    var dataToSend = {
      email: Email,
      password: Password,
    };

    loginUser(dataToSend)
      .then(data => {
        SaveuserToken(data)

      })
      .catch(error => {
        alert('Erro ao autenticar usuário: ' + error.message);
      });
    
    
  };

  async function SaveuserToken (data) {
    const userId = data['id'];

    // Crie um objeto de payload do token
    const tokenPayload = {
      userId,
      // Outros dados necessários para identificar o usuário, se necessário
    };

    // Use uma biblioteca para criar o token, como jsonwebtoken
    // Neste exemplo, vamos criar um token simples usando JSON.stringify
    const userToken = JSON.stringify(tokenPayload);

    // Salva o token no AsyncStorage
    try {
      await AsyncStorage.setItem('userToken', userToken);
      route.params.onLoginConfirmed();
    } catch (error) {
      console.error('Erro ao salvar token no AsyncStorage:', error);
    }
  }

  return (
    <View style={{ flex: 1}}>
      <LinearGradient style={GlobalStyles.GradiantContainer} colors={CustomLightTheme.colors.Grad} >
        <Image style={GlobalStyles.tinyLogo} source={CustomLightTheme.logo}/>

        <SafeAreaView>
            <SafeTextInput placeholder="E-mail" onChangeText={SetEmail} value={Email} />
            <SafeTextInput showPassWord={showPassWord} showPassWordPress={()=>{onChangeShowPassWord(!showPassWord)}} Type="password" placeholder="Password"  onChangeText={SetPassword} value={Password} />
        </SafeAreaView>

        <View >
          <TouchableOpacity onPress={handleSubmitButton} style={ButtonStyles.Primarry} title="SignIn" >
            <Text style={ButtonStyles.PrimarryText} > SignIn </Text>
          </TouchableOpacity>
        </View>

        <View style={GlobalStyles.Space_T_B}>
          <Pressable style={GlobalStyles.SideToSideContainer} onPress={() => navigation.navigate('SingUp')}>
            <Text style={{color : CustomLightTheme.colors.White}} >Não possui uma conta?</Text>
            <Text> Cadastre-se</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
}
