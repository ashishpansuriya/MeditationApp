import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './src/Navigation/AppNavigation';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  setTimeout(() => {
    SplashScreen.hide(); //this.props.navigation.navigate('Login')
  }, 2000);
  return (
    <AppNavigation />
  );
}

export default App;
