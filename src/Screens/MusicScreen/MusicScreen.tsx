import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface MusicScreenProps {}

const MusicScreen = (props: MusicScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>MusicScreen</Text>
    </View>
  );
};

export default MusicScreen;

const styles = StyleSheet.create({
  container: {}
});
