import i18n from 'i18next';
import 'intl-pluralrules';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async (callback) => {
    const savedLanguage = await AsyncStorage.getItem('language');
    const userLanguage = savedLanguage || 'pt_br';
    callback(userLanguage);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt_br',
    resources: {
      pt_br: {
          translation: {
            'laguage_code' : 'Português (Brasil)',
            'language' : 'Idioma', 
            'hello' : 'Olá',
            'welcome' : 'Bem Vindo',
          },
        },
      en: {
        translation: {
          'laguage_code' : 'English (US)',
          'language' : 'language', 
          'hello': 'Hello',
          'welcome': 'Welcome',
        },
      },
      // Adicione mais idiomas conforme necessário

    },
  });

export default i18n;
