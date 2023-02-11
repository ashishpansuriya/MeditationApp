import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { SocialIcon } from 'react-native-elements'
import { Colors } from '../../Styles/Colors';
import { Images } from '../../Images/Images';


interface LoginScreenProps {
    navigation?: any;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.MainContainer}>
            <View >
                <Text style={styles.WelcomeText}>Welcome Back!</Text>

                <TouchableOpacity
                    style={styles.buttonFacebookStyle}
                    activeOpacity={0.5}>
                    <Image
                        source={Images.faceBookIcon}
                        style={styles.buttonImageIconStyle}
                    />

                    <Text style={styles.buttonTextStyle}>
                        Login Using Facebook
                    </Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

export default LoginScreen;