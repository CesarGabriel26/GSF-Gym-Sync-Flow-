import * as Notifications from 'expo-notifications';


export const registerForPushNotifications = async () => {
  try {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status === 'granted') {
      const tokenData = await Notifications.getExpoPushTokenAsync();
      const token = tokenData.data;
      //console.log('Token de notificação:', token);
      // Salve o token em seu servidor ou em AsyncStorage, se necessário
    } else {
      //console.log('Permissão de notificação não concedida');
    }
  } catch (error) {
    console.error('Erro ao registrar para notificações:', error);
  }
};


export const sendNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Título da Notificação',
        body: 'Corpo da Notificação',
      },
      trigger: null, // Notificação imediata
    });
  };
