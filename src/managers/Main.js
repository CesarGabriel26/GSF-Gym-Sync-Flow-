import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { CustomLightTheme } from '../style/theme';


//! Screens / Pages

import HomeScreen from '../pages/Home';
import SettingsScreen from '../pages/Settings';
import ChatScreen from '../pages/Chat';
import CalendarScreen from '../pages/Calendar';



const Tab = createBottomTabNavigator();

export default function MainScreen() {

  return (
    <NavigationContainer theme={CustomLightTheme}>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'Chat':
                iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
                break;
              case 'Calendar':
                iconName = focused ? 'calendar' : 'calendar-outline';
                break;
              case 'Settings':
                iconName = focused ? 'settings' : 'settings-outline';
                break;
              default:
                return null
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: CustomLightTheme.colors.BarActiveTint,
          tabBarInactiveTintColor: CustomLightTheme.colors.BarInactiveTint,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: [
            {
              display: "flex"
            },
            null
          ]
        })}
      >

        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}