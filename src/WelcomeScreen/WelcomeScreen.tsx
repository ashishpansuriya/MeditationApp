import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Images } from '../Images/Images';
import { Colors } from '../Styles/Colors';

interface WelcomeScreenProps {
    navigation?: any;   
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.MainBG}>
            <View style={styles.imageBG}>
                <Image source={Images.silentMoon} style={styles.imageLogo} resizeMode={'contain'} />
                <Image source={Images.musicGirl} style={styles.imageBG} resizeMode={'contain'} />

            </View>
            <View style={{ flex: 0.5 }}>
                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                    <View>
                        <Text style={styles.Header} >We are what we do</Text>
                        <Text style={styles.subTitle} >Thousand of people are usign silent moon for smalls meditation</Text>
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.signUpText} >SIGN UP</Text>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <Text style={[styles.loginTitle,]} >ALREADY HAVE AN ACCOUNT?</Text>
                            <TouchableOpacity onPress={()=>{}}>
                                <Text style={{ color: Colors.lightBlue }}> LOG IN</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default WelcomeScreen;