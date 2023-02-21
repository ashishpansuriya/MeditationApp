import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import WelcomeScreen from '../Screens/WelcomeScreen/WelcomeScreen';
import SignUpScreen from '../Screens/SignUpScreen/SignUpScreen';
import WelcomeAskScreen from '../Screens/WelcomeAskScreen/WelcomeAskScreen';
import MeditationTime from '../Screens/MeditationSetTime/MeditationTime';

const Stack = createNativeStackNavigator();

function AppNavigation(): JSX.Element {
  // Ignore log notification by message
  LogBox.ignoreLogs(['Warning: ...']);

  //Ignore all log notifications
  LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
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
