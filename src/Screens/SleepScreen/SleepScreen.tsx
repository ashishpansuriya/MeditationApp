import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface SleepScreenProps {}

const SleepScreen = (props: SleepScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>SleepScreen</Text>
    </View>
  );
};

export default SleepScreen;

const styles = StyleSheet.create({
  container: {}
});
