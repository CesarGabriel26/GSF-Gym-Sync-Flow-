import * as React from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Image, Text, View, Modal, Pressable} from 'react-native';
import { CustomLightTheme } from '../../style/theme';
import { Ionicons } from '@expo/vector-icons';
import { SaveOnStorage, LoadFromStorage } from '../../managers/UserDataManager';
import { GlobalStyles } from '../../style/style';
import SettingButton from '../../components/SettingsButton';
import { UpdateUser } from '../../managers/ApiManager';

export default function ProfileModal(params) {
    const [image, setImage] = React.useState(null);
    const [data, setdata] = React.useState([]);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [10, 10],
            quality: 1,
        });

        if (!result.canceled) {
            let currentData = { ...data }; // Criar uma cópia do objeto data
            currentData.profile_picture = result.assets[0].uri;
            setdata(currentData);
            setImage(result.assets[0].uri);
            UpdateData(currentData);
        }
    };

    const loadData = async () => {
        let data_await = await LoadFromStorage()
        setdata(data_await)
        setImage(data['profile_picture'])
    }

    const UpdateData = (updatedUserData) => {
        UpdateUser(data['id'], updatedUserData)
        .then(updatedUser => {
            SaveOnStorage(updatedUser);
            //console.log('Usuário atualizado com sucesso:', updatedUser);
        })
        .catch(error => {
            //console.error('Erro ao atualizar o usuário:', error);
        });
    }

    React.useEffect(() => {loadData()},[]);

    return (
        <Modal animationType="slide" transparent={true} visible={params.visible}
            onRequestClose={params.onRequestClose}>

            <View style={{ flex : 1, justifyContent : 'center', alignItems : 'center' }} >
                <View style={{ flex : 1, width : '100%', backgroundColor : CustomLightTheme.colors.ModalBg, padding : 15, borderRadius : 20 }} >

                    <View style={{display : 'flex', flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center'}}>

                        <Pressable onPress={params.onRequestClose}>
                            <Ionicons name={'caret-back-outline'} style = {{margin : 10}} size={30} color="black" />
                        </Pressable>

                        <Pressable onPress={params.onRequestClose}>
                            <Text style={{fontWeight : 500, fontSize : 20}}>Save</Text>
                        </Pressable>

                    </View>

                    <View style={[{position : 'relative'},{ flex : 1, justifyContent : 'center', alignItems : 'center' }]}>

                        <View style={[ GlobalStyles.RoundImage, GlobalStyles.AlingCenter, {position : 'absolute', backgroundColor : '#00000055', zIndex : 99} ]}>
                            <Ionicons onPress={pickImage} name={'pencil-outline'} style = {{margin : 10}} size={50} color="white" />
                        </View>

                        <Image source={{ uri: image }}  style={GlobalStyles.RoundImage} />

                    </View>

                    <View>

                        <SettingButton onPress={()=>{alert("Privacy")}} style={GlobalStyles.Space_T_B} title="Name" text={data['name']} />
                        <SettingButton onPress={()=>{alert("Privacy")}} style={GlobalStyles.Space_T_B} title="Name" text={data['email']} />
                        <SettingButton onPress={()=>{alert("Privacy")}} style={GlobalStyles.Space_T_B} title="Name" text={data['password']} secret />

                    </View>

                </View>
            </View>
        </Modal>
    );
}