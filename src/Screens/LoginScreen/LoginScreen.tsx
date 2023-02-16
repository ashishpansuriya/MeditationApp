import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { Colors } from '../../Styles/Colors';
import { Images } from '../../Images/Images';
import { metrics } from '../../Styles/metrics';
import CustomToolBar from '../../component/CustomToolBar';

interface LoginScreenProps {
    navigation?: any;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {

    function goBack() {
        navigation.pop();
    }
    function goToSignUp() {
        navigation.navigate('SignUpScreen');
    }
    

    return (
        <SafeAreaView style={styles.MainContainer}>
            <View style={{ flex: 1, }}  >

                <CustomToolBar image={Images.faceBookIcon} onPress={goBack} />

                <View style={{ flex: 1, justifyContent: 'space-between' }}>

                    <View style={{ flex: 0.8, alignItems: 'flex-start', alignSelf: 'center' }}>
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

                        <View>
                            <TextInput placeholder='Email address' value='' style={styles.textInput} />
                        </View>

                        <View style={{ marginTop: metrics.hp4 }}>
                            <TextInput placeholder='Password' value='' style={styles.textInput} />
                        </View>


                    </View>

                    <View style={{ flex: 0., alignItems: 'flex-end', justifyContent: 'space-between', alignSelf: 'center' }}>
                        <View>
                            <TouchableOpacity style={styles.button} onPress={() => { }}>
                                <Text style={styles.signUpText} >LOG IN</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { }} style={{ alignSelf: 'center' }} >
                                <Text style={[styles.orForgotText, { color: Colors.black }]}>
                                    Forgot Password?
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'flex-end', marginBottom: metrics.hp6 }}>
                            <Text style={[styles.loginTitle, {}]} >DON'T HAVE AN ACCOUNT?</Text>
                            <TouchableOpacity onPress={goToSignUp}>
                                <Text style={{ color: Colors.lightBlue }}> SIGN UP</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen;