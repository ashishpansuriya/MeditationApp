import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import DatePicker from 'react-native-date-picker';
import {metrics} from '../../Styles/metrics';
import CustomButton from '../../component/CustomButton/CustomButton';
import {Colors} from '../../Styles/Colors';

interface MeditationTimeProps {
  navigation: any;
}

const MeditationTime = (props: MeditationTimeProps) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [day1, setDay1] = useState<boolean>(false);
  const [day2, setDay2] = useState<boolean>(false);
  const [day3, setDay3] = useState<boolean>(false);
  const [day4, setDay4] = useState<boolean>(false);
  const [day5, setDay5] = useState<boolean>(false);
  const [day6, setDay6] = useState<boolean>(false);
  const [day7, setDay7] = useState<boolean>(false);

  function DaySelect(day: number) {
    if (day == 1) {
      setDay1(!day1);
    } else if (day == 2) {
      setDay2(!day2);
    } else if (day == 3) {
      setDay3(!day3);
    } else if (day == 4) {
      setDay4(!day4);
    } else if (day == 5) {
      setDay5(!day5);
    } else if (day == 6) {
      setDay6(!day6);
    } else if (day == 7) {
      setDay7(!day7);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          style={
            styles.maditateText
          }>{`What time would you\nlike to meditate?`}</Text>
        <Text
          style={
            styles.smallText
          }>{`Any time you can choose but We recommend\nfirst thing in th morning.`}</Text>

        <View style={{alignItems: 'center', marginTop: metrics.hp4 }}>
          <DatePicker
            open={open}
            date={date}
            mode={'time'}
            style={styles.timePicker}
            androidVariant={'iosClone'}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>

        <Text
          style={
            styles.maditateText
          }>{`Which Day would you\nlike to meditate?`}</Text>
        <Text
          style={
            styles.smallText
          }>{`Everyday is best, but we recommend picking\nat least five.`}</Text>

        <View style={styles.viewDayItem}>
          <TouchableOpacity
            onPress={() => DaySelect(1)}
            style={[
              styles.roundDay,
              {
                backgroundColor: day1 ? Colors.headerColor : Colors.white,
                borderColor: day1 ? Colors.headerColor : Colors.subtitle,
              },
            ]}>
            <Text
              style={[
                styles.dayText,
                {color: day1 ? Colors.white : Colors.subtitle},
              ]}>
              SU
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => DaySelect(2)}
            style={[
              styles.roundDay,
              {
                backgroundColor: day2 ? Colors.headerColor : Colors.white,
                borderColor: day2 ? Colors.headerColor : Colors.subtitle,
              },
            ]}>
            <Text
              style={[
                styles.dayText,
                {color: day2 ? Colors.white : Colors.subtitle},
              ]}>
              M
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => DaySelect(3)}
            style={[
              styles.roundDay,
              {
                backgroundColor: day3 ? Colors.headerColor : Colors.white,
                borderColor: day3 ? Colors.headerColor : Colors.subtitle,
              },
            ]}>
            <Text
              style={[
                styles.dayText,
                {color: day3 ? Colors.white : Colors.subtitle},
              ]}>
              T
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => DaySelect(4)}
            style={[
              styles.roundDay,
              {
                backgroundColor: day4 ? Colors.headerColor : Colors.white,
                borderColor: day4 ? Colors.headerColor : Colors.subtitle,
              },
            ]}>
            <Text
              style={[
                styles.dayText,
                {color: day4 ? Colors.white : Colors.subtitle},
              ]}>
              W
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => DaySelect(5)}
            style={[
              styles.roundDay,
              {
                backgroundColor: day5 ? Colors.headerColor : Colors.white,
                borderColor: day5 ? Colors.headerColor : Colors.subtitle,
              },
            ]}>
            <Text
              style={[
                styles.dayText,
                {color: day5 ? Colors.white : Colors.subtitle},
              ]}>
              T
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => DaySelect(6)}
            style={[
              styles.roundDay,
              {
                backgroundColor: day6 ? Colors.headerColor : Colors.white,
                borderColor: day6 ? Colors.headerColor : Colors.subtitle,
              },
            ]}>
            <Text
              style={[
                styles.dayText,
                {color: day6 ? Colors.white : Colors.subtitle},
              ]}>
              F
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => DaySelect(7)}
            style={[
              styles.roundDay,
              {
                backgroundColor: day7 ? Colors.headerColor : Colors.white,
                borderColor: day7 ? Colors.headerColor : Colors.subtitle,
              },
            ]}>
            <Text
              style={[
                styles.dayText,
                {color: day7 ? Colors.white : Colors.subtitle},
              ]}>
              S
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center', marginTop: metrics.hp2}}>
          <CustomButton
            onpress={() => {
              props.navigation.navigate('HomeScreen');
            }}
            text={'SAVE'}
            color={Colors.lightBlue}
            textColor={Colors.white}
          />
          <Text style={styles.NoText}>NO THANKS</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MeditationTime;
