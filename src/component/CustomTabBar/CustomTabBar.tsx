import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface CustomTabBarProps {}

const CustomTabBar = (props: CustomTabBarProps) => {
  return (
    <View style={styles.container}>
      <Text>CustomTabBar</Text>
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  container: {}
});
