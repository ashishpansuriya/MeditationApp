import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface MeditateScreenProps {}

const MeditateScreen = (props: MeditateScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>MeditateScreen</Text>
    </View>
  );
};

export default MeditateScreen;

const styles = StyleSheet.create({
  container: {}
});
