import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors } from '../../Styles/Colors';
import { Fonts } from '../../Styles/Fonts';
import { metrics } from '../../Styles/metrics';

export const styles = StyleSheet.create({
    MainContainer: { flex: 1, backgroundColor: Colors.white },
    WelcomeText: { alignSelf: 'center', fontFamily: Fonts.BoldFonts, fontSize: RFValue(22), textAlign: 'center', color: Colors.black, marginTop: metrics.hp4 },
    ButtonContainer: { marginTop: metrics.hp3, alignSelf: 'center', },


    buttonFacebookStyle: { alignSelf: 'center', flexDirection: 'row', alignItems: 'center', backgroundColor: '#7583CA', height: metrics.hp7, width: metrics.wp90, borderRadius: metrics.hp9, },
    buttonGoogleStyle: { marginTop: metrics.hp4, alignSelf: 'center', flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: "#E5E5E5", backgroundColor: Colors.transperent, height: metrics.hp7, width: metrics.wp90, borderRadius: metrics.hp9, },
    buttonImageIconStyle: { marginLeft: metrics.hp3, height: metrics.hp3_5, width: metrics.hp2, resizeMode: 'contain', },
    googleIcon: { marginLeft: metrics.hp3, height: metrics.hp6, width: metrics.hp3, resizeMode: 'contain', },
    buttonTextStyle: { color: '#F6F1FB', marginLeft: metrics.hp5, fontSize: RFValue(12), fontFamily: Fonts.LightFonts },
    Text: { color: '#3F414E', marginBottom: 4, marginLeft: metrics.hp4, fontSize: RFValue(12) },
    orLoginText: { color: '#A1A4B2', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', textAlign: 'center', fontSize: RFValue(12), marginVertical: metrics.hp4 },
    orForgotText: { color: '#A1A4B2', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', textAlign: 'center', fontSize: RFValue(12), marginTop: metrics.hp1 },
    buttonIconSeparatorStyle: { backgroundColor: '#fff', width: 1, height: 40, },
    textInput: { width: metrics.wp90, paddingLeft: metrics.hp3, alignSelf: 'center', height: metrics.hp7, borderRadius: metrics.hp1, backgroundColor: Colors.lightWhite },

    signUpText: { alignItems: 'center', fontSize: RFValue(14), width: widthPercentageToDP('90%'), color: Colors.white, textAlign: 'center' },
    loginTitle: { alignSelf: 'center', fontSize: RFValue(12), color: Colors.subtitle, textAlign: 'center' },
    button: { marginTop: metrics.hp4, justifyContent: 'center', alignSelf: 'center', backgroundColor: Colors.lightBlue, borderRadius: metrics.hp5, height: metrics.hp8, fontSize: RFValue(14), width: metrics.wp90, color: Colors.subtitle, alignItems: 'center', },
    checkbox: { alignItems: 'center',justifyContent:'center' },
});