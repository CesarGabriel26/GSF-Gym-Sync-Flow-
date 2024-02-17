import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text, View, Image, Pressable} from 'react-native';
import { GetUserDataById } from '../managers/ApiManager';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SaveOnStorage } from '../managers/UserDataManager';


export default function Header() {
    const [Pfp, SetPfp] = React.useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2wqLv2VOrfZeEAO3jSHxvmEL7eZA-VeJ_L8-L3q7gdcLzV6YeRGHpWoCr06dsriPxvYY&usqp=CAU');

    const checkToken = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        const parsedToken = JSON.parse(userToken);
        GetUserDataById(Number(parsedToken['userId']))
        .then(data => {
            SetPfp(data['profile_picture'])
            SaveOnStorage(data)
        })
        .catch(error => {
        alert('Erro ao obter data do usuário: ' + error.message);
        });
      };

    React.useEffect(() => {
        checkToken();
    }, []);

    return (
        <View style={{flex : 1, flexDirection : 'row', width : '100%', justifyContent: 'space-between', alignItems : 'center', paddingLeft : 10, paddingRight : 10}}>
            <Pressable onPress={()=>{alert("PRESSED!")}}>
                <Ionicons name={"menu-outline"} size={50} color="black" />
            </Pressable>

            <View>

                <Image style={{height : 55, width : 55, borderRadius : 50}} source={{
                    uri: Pfp,
                }}/>

            </View>

        </View>
    )
}
