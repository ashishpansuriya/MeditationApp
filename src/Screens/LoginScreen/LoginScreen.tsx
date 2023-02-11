import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { SocialIcon } from 'react-native-elements'
import { Colors } from '../../Styles/Colors';
import { Images } from '../../Images/Images';
import { metrics } from '../../Styles/metrics';
import CustomToolBar from '../../component/CustomToolBar';


interface LoginScreenProps {
    navigation?: any;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.MainContainer}>
            <View >
                <CustomToolBar image={Images.faceBookIcon} onPress={() => { }} />

                <Text style={styles.WelcomeText}>Welcome Back!</Text>

                <View style={styles.ButtonContainer}>
                    <TouchableOpacity
                        style={styles.buttonFacebookStyle}
                        activeOpacity={0.5}>
                        <Image
                            source={Images.faceBookIcon}
                            style={styles.buttonImageIconStyle}
                        />
                        <Text style={styles.buttonTextStyle}>
                            CONTINUE WITH FACEBOOK
                        </Text>
                    </TouchableOpacity>
                </View>


                <TouchableOpacity
                    style={styles.buttonGoogleStyle}
                    activeOpacity={0.5}>
                    <Image
                        source={Images.googleIcon}
                        style={styles.googleIcon}
                    />
                    <Text style={styles.Text}>
                        CONTINUE WITH GOOGLE
                    </Text>
                </TouchableOpacity>

                <Text style={styles.orLoginText}>
                    OR LOG IN WITH EMAIL
                </Text>

                <View style={{ marginTop: metrics.hp5 }}>
                    <TextInput placeholder='Email address' value='' style={styles.textInput} />
                </View>


                <View style={{ marginTop: metrics.hp5 }}>
                    <TextInput placeholder='Email address' value='' style={styles.textInput} />
                </View>

                <View style={{ }}>
                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <Text style={styles.signUpText} >SIGN UP</Text>
                    </TouchableOpacity>

                    <Text style={[styles.orLoginText,{marginBottom:metrics.hp3}]}>
                        Forgot Password?
                    </Text>

                    <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
                        <Text style={[styles.loginTitle,]} >ALREADY HAVE AN ACCOUNT?</Text>
                        <TouchableOpacity onPress={() => { }}>
                            <Text style={{ color: Colors.lightBlue }}> LOG IN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen;