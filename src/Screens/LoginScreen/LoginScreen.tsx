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

    function goBack(){
        navigation.pop();
    }

    return (
        <SafeAreaView style={styles.MainContainer}>
            <View style={{ flex: 1, }}  >

                <CustomToolBar image={Images.faceBookIcon} onPress={goBack } />

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
                            <TextInput placeholder='Email address' value='' style={styles.textInput} />
                        </View>
                    </View>

                    <View style={{ flex: 0.3, alignItems: 'flex-end', alignSelf: 'center' }}>
                        <TouchableOpacity style={styles.button} onPress={() => { }}>
                            <Text style={styles.signUpText} >LOG IN</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { }} style={{ alignSelf: 'center' }} >
                            <Text style={[styles.orForgotText, { color: Colors.black }]}>
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'flex-end', marginTop: metrics.hp7 }}>
                            <Text style={[styles.loginTitle, {}]} >ALREADY HAVE AN ACCOUNT?</Text>
                            <TouchableOpacity onPress={() => { }}>
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