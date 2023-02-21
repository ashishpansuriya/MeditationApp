import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import WelcomeScreen from '../Screens/WelcomeScreen/WelcomeScreen';
import SignUpScreen from '../Screens/SignUpScreen/SignUpScreen';
import WelcomeAskScreen from '../Screens/WelcomeAskScreen/WelcomeAskScreen';
import MeditationTime from '../Screens/MeditationSetTime/MeditationTime';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import SleepScreen from '../Screens/SleepScreen/SleepScreen';
import MeditateScreen from '../Screens/MeditateScreen/MeditateScreen';
import MusicScreen from '../Screens/MusicScreen/MusicScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AppNavigation(): JSX.Element {
  // Ignore log notification by message
  LogBox.ignoreLogs(['Warning: ...']);

  //Ignore all log notifications
  LogBox.ignoreAllLogs();
  function MainTabNavigator() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Sleep"
          component={SleepScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Meditate"
          component={MeditateScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Music"
          component={MusicScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={MainTabNavigator}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SplashScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WelcomeAskScreen"
          component={WelcomeAskScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MeditationTime"
          component={MeditationTime}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
