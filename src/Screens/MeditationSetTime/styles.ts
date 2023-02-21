import {StyleSheet} from 'react-native';
import {Fonts} from '../../Styles/Fonts';
import {metrics} from '../../Styles/metrics';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../Styles/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: metrics.hp1_5,
    backgroundColor: Colors.white,
  },
  maditateText: {
    width: metrics.hp100,
    alignSelf: 'flex-start',
    fontFamily: Fonts.BoldFonts,
    fontSize: RFValue(16),
    color: Colors.black,
    fontWeight: 'bold',
    marginTop: metrics.hp7,
  },
  smallText: {
    width: metrics.hp100,
    alignSelf: 'flex-start',
    fontFamily: Fonts.LightFonts,
    fontSize: RFValue(12),
    color: Colors.subtitle,
    marginTop: metrics.hp2,
  },
  timePicker: {
    justifyContent: 'center',
  },
  roundDay: {
    width: metrics.hp5,
    height: metrics.hp5,
    borderRadius: metrics.hp2_5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayText: {
    color:Colors.subtitle,
  },
  NoText: {
    alignSelf: 'center',
    fontFamily: Fonts.BoldFonts,
    fontSize: RFValue(14),
    color: Colors.black,
    marginTop: metrics.hp4,
  },
  viewDayItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: metrics.hp4,
    
  },
});
