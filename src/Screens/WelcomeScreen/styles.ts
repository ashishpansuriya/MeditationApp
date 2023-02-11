import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors } from '../../Styles/Colors';
import { Fonts } from '../../Styles/Fonts';
import { metrics } from '../../Styles/metrics';

export const styles = StyleSheet.create({
    MainBG: { flex: 1, backgroundColor: '#FFFFF7', alignItems: 'center' },
    subView: { flex: 0.3, backgroundColor: '#000', alignItems: 'center' },
    imageBG: {  width: '90%', height: heightPercentageToDP('40%'),alignItems:'flex-start', alignSelf: 'center' },
    imageLogo: { width: '90%', height: heightPercentageToDP('7%'), alignSelf: 'center', marginTop: metrics.hp7 },
    Header: { alignSelf: 'center', fontSize: RFValue(20), color: Colors.headerColor,  textAlign: 'center' ,fontFamily:Fonts.BoldFonts },
    subTitle: { alignSelf: 'center', fontSize: RFValue(14), width: widthPercentageToDP('90%'), color: Colors.subtitle, textAlign: 'center',marginTop:5},
    signUpText: { alignItems: 'center', fontSize: RFValue(14), width: widthPercentageToDP('90%'), color: Colors.white, textAlign: 'center' },
    loginTitle: { alignSelf: 'center', fontSize: RFValue(12), color: Colors.subtitle, textAlign: 'center' },
    button: { justifyContent: 'center', backgroundColor: Colors.lightBlue, borderRadius: metrics.hp5, height: heightPercentageToDP(8), fontSize: RFValue(14), width: widthPercentageToDP('90%'), color: Colors.subtitle,alignItems:'center', marginBottom:metrics.hp2 },
});