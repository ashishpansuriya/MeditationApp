import {StyleSheet} from 'react-native';
import {Colors} from '../../Styles/Colors';
import {Fonts} from '../../Styles/Fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import {metrics} from '../../Styles/metrics';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.lightBlue},
  backgroundImage: {width: '100%', height: '100%'},
  welcomeText: {
    width: '100%',
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: Fonts.BoldFonts,
    fontSize: RFValue(22),
    color: Colors.white,
    fontWeight: 'bold',
    marginTop:metrics.hp7
  },
  toApp: {
    width: '100%',
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: Fonts.MediumFonts,
    fontSize: RFValue(16),
    color: Colors.white,
  },
  exploreApp: {
    width: '100%',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: metrics.hp3,
    paddingHorizontal: metrics.wp5,
    fontFamily: Fonts.LightFonts,
    fontSize: RFValue(12),
    color: Colors.white,
  },
  imageLogo: {
    width: '90%',
    height: metrics.hp7,
    alignSelf: 'center',
    marginTop: metrics.hp7,
  },
});
