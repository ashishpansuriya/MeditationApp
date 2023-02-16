import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { Colors } from '../../Styles/Colors';
import { Images } from '../../Images/Images';
import { metrics } from '../../Styles/metrics';
import CustomToolBar from '../../component/CustomToolBar';
import CheckBox from 'react-native-check-box'

interface SignUpScreenProps {
    navigation?: any;
}

export const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {

    function goBack() {
        navigation.pop();
    }

    function goToWelcomeAskScreen() {
        navigation.navigate('WelcomeAskScreen');
    }

    return (
        <SafeAreaView style={styles.MainContainer}>
            <View style={{ flex: 1, }}  >

                <CustomToolBar image={Images.faceBookIcon} onPress={goBack} />

                <View style={{ flex: 1, justifyContent: 'space-between' }}>

                    <View style={{ flex: 0.8, alignItems: 'flex-start', alignSelf: 'center' }}>
                        <Text style={styles.WelcomeText}>Create your account </Text>

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
                            <TextInput placeholder='Name' value='' style={styles.textInput} />
                        </View>

                        <View style={{ marginTop: metrics.hp4 }}>
                            <TextInput placeholder='Email address' value='' style={styles.textInput} />
                        </View>

                        <View style={{ marginTop: metrics.hp4 }}>
                            <TextInput placeholder='Password' value='' style={styles.textInput} />
                        </View>
                    </View>

                    <View style={{ flex: 0.3, alignItems: 'flex-end', justifyContent: 'space-between', alignSelf: 'center' }}>
                        <View>

                            <TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                                <Text style={[styles.orForgotText, { color: Colors.black, marginTop: 0 }]}>
                                    I have read the <Text style={{ color: Colors.lightBlue }} onPress={() => { }} >Privace Policy</Text>
                                </Text>

                                <CheckBox
                                    isChecked={false}
                                    onClick={() => { }}
                                    checkedCheckBoxColor={Colors.lightBlue}
                                    style={styles.checkbox}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button} onPress={goToWelcomeAskScreen   }>
                                <Text style={styles.signUpText} >LOG IN</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignUpScreen;