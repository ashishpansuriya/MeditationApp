import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '../../Styles/Colors';
import { Fonts } from '../../Styles/Fonts';
import { metrics } from '../../Styles/metrics';

export const styles = StyleSheet.create({
    MainContainer: { flex: 1 },
    WelcomeText: { fontFamily: Fonts.BoldFonts, fontSize: RFValue(22), textAlign: 'center', color: Colors.black },
    buttonFacebookStyle: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#485a96', borderWidth: 0.5, borderColor: '#fff', height: 63, width: 374, borderRadius: 5, margin: 5, },
    buttonImageIconStyle: { marginLeft: metrics.hp0_7, height: 25, width: 25, resizeMode: 'stretch', },
    buttonTextStyle: { color: '#fff', marginBottom: 4, marginLeft: 10, },
    buttonIconSeparatorStyle: { backgroundColor: '#fff', width: 1, height: 40, },
});