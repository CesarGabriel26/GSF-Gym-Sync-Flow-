import AsyncStorage from '@react-native-async-storage/async-storage';

export function SaveOnStorage(data) {
    AsyncStorage.setItem('data', JSON.stringify(data))
}

export async function LoadFromStorage() {
    var data = await AsyncStorage.getItem('data')
    return JSON.parse(data)
}

export async function LoadFromStorageByKey(Key) {
    var data = await AsyncStorage.getItem('data');
    
    if (data) {
        var parseData = JSON.parse(data);
        return parseData[Key];
    } else {
        // Handle the case when there is no data in AsyncStorage
        return null;
    }
}