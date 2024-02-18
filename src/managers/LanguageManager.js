import i18n from 'i18next';
import 'intl-pluralrules';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';


//!
import { pt_br } from '../languages/pt_br';
import { en_us } from '../languages/en_us';

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
}

export function LoadAvaliableLanguages() {

}

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt_br',
    resources: {
      pt_br: pt_br,
      en_us:  en_us,

    },
  });

export default i18n;
