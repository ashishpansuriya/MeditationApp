import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from '../SplashScreen';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';

const Stack = createNativeStackNavigator();

function AppNavigation(): JSX.Element {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='WelcomeScreen'>
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;