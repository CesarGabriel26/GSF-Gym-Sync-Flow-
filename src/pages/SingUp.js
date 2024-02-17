import React from "react";
import { Text, View, TouchableOpacity, Image, Pressable, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GlobalStyles, ButtonStyles } from "../style/style";
import { CustomLightTheme } from "../style/theme";
import SafeTextInput from "../components/customInput";
import { RegisterUser } from "../managers/ApiManager";
import { NewUser } from "../models/models";

export default function SingUpScreen({ route, navigation }) {
  const [showPassWord, SetChangeShowPassWord] = React.useState(false);
  const [UserName, SetChangeUserName] = React.useState('');
  const [EMail, SetChangeEMail] = React.useState('');
  const [Password, SetChangePassword] = React.useState('');
  const [CheckPassword, SetChangeCheckPassword] = React.useState('');


  const handleSubmitButton = () => {
    if (!UserName) {
      alert('Please fill Name');
      return;
    }
    if (!EMail) {
      alert('Please fill Email');
      return;
    }
    if (!Password) {
      alert('Please fill Password');
      return;
    }
    if (!CheckPassword) {
      alert('Please fill Check Password');
      return;
    }
    if (Password != CheckPassword) {
      alert('Senhas incompativeis');
      return;
    }

    var dataToSend = NewUser(UserName , EMail, Password)


    RegisterUser(dataToSend)
    .then(data => {
      // Lógica para lidar com o sucesso
      alert('Usuário adicionado com sucesso!');
      setTimeout(() => {
        navigation.navigate({
          name: 'SingIn',
          params: { email: EMail, password : Password },
        });
      }, 2000);
    })
    .catch(error => {
      // Lógica para lidar com o erro
      alert('Erro ao adicionar usuário: ' + error.message);
    });
    

  };

  return (
    <View style={{ flex: 1}}>
      <LinearGradient style={GlobalStyles.GradiantContainer} colors={CustomLightTheme.colors.Grad} >
        <Image style={GlobalStyles.tinyLogo} source={CustomLightTheme.logo}/>

        <SafeAreaView>
            <SafeTextInput placeholder="User Name" onChangeText={SetChangeUserName} value={UserName} />
            <SafeTextInput placeholder="E-mail" onChangeText={SetChangeEMail} value={EMail} />
            <SafeTextInput showPassWord={showPassWord} placeholder="Password" Type="password" onChangeText={SetChangePassword} value={Password} />
            <SafeTextInput showPassWord={showPassWord} showPassWordPress={()=>{SetChangeShowPassWord(!showPassWord)}} placeholder="Confirm Password" Type="password" onChangeText={SetChangeCheckPassword} value={CheckPassword} />
        </SafeAreaView>

        <View >
          <TouchableOpacity onPress={handleSubmitButton} style={ButtonStyles.Primarry} title="SignIn">
            <Text style={ButtonStyles.PrimarryText} > SignUp </Text>
          </TouchableOpacity>
        </View>

        <View style={GlobalStyles.Space_T_B}>
          <Pressable style={GlobalStyles.SideToSideContainer} onPress={() => navigation.navigate('SingIn')}>
            <Text style={{color : CustomLightTheme.colors.White}} >Já possui uma conta?</Text>
            <Text>SingIn</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
}