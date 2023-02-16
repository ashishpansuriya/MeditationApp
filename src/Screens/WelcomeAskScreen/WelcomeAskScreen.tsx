import * as React from 'react';
import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native';
import {Images} from '../../Images/Images';
import {styles} from './styles';
import {metrics} from '../../Styles/metrics';
import {Colors} from '../../Styles/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../component/CustomButton/CustomButton';

interface WelcomeAskScreenProps {}

const WelcomeAskScreen = (props: WelcomeAskScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ImageBackground
          source={Images.welcome}
          style={styles.backgroundImage}
          resizeMode={'cover'}>
          <View style={{justifyContent: 'space-between', flex: 1}}>
            <View style={{}}>
              <Image
                source={Images.silentMoon}
                style={styles.imageLogo}
                resizeMode={'contain'}
              />

              <Text style={styles.welcomeText}>Hi Ashish, Welcome </Text>
              <Text style={styles.toApp}>to Silent Moon</Text>
              <Text style={styles.exploreApp}>
                Explore the app, Find some peace of mind to prepare for
                meditation.
              </Text>
            </View>
            <View style={{marginBottom: metrics.hp7}}>
              <CustomButton
                onpress={() => {}}
                text={'GET STARTED'}
                color={Colors.white}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeAskScreen;
