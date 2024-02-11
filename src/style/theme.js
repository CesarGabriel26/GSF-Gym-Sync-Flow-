import { DefaultTheme } from '@react-navigation/native';

export const CustomLightTheme = {
  dark : false,

  logo : require('../img/DarkLogo.png'),

  colors: {
    ...DefaultTheme.colors,

    Grad : ['#ED4264',"#FDDEB4"],
    BarActiveTint : '#ED4264',
    BarInactiveTint : '#3b3b3b',
    PrimaryButtonColor: '#000000',

  },
};