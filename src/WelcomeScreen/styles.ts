import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors } from '../Styles/Colors';

export const styles = StyleSheet.create({
    MainBG: { flex: 1, backgroundColor: '#FFFFF7', alignItems: 'center' },
    subView: { flex: 0.3, backgroundColor: '#000', alignItems: 'center' },
    imageBG: { flex: 0.7, width: '90%', height: heightPercentageToDP('30%'), alignSelf: 'center', marginTop: 20 },
    imageLogo: { width: '90%', height: heightPercentageToDP('7%'), alignSelf: 'center', marginTop: 20 },
    Header: { alignSelf: 'center', fontSize: RFValue(20), color: Colors.headerColor, fontWeight: 'bold', textAlign: 'center' },
    subTitle: { alignSelf: 'center', fontSize: RFValue(14), width: widthPercentageToDP('90%'), color: Colors.subtitle, textAlign: 'center',marginTop:5},
    signUpText: { alignItems: 'center', fontSize: RFValue(14), width: widthPercentageToDP('90%'), color: Colors.white, textAlign: 'center' },
    loginTitle: { alignSelf: 'center', fontSize: RFValue(14), color: Colors.subtitle, textAlign: 'center' },
    button: { justifyContent: 'center', backgroundColor: Colors.lightBlue, borderRadius: 32, height: heightPercentageToDP(8), fontSize: RFValue(14), width: widthPercentageToDP('90%'), color: Colors.subtitle,alignItems:'center', marginBottom:10 },
});