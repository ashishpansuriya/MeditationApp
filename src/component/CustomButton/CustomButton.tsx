import * as React from 'react';
import {metrics} from '../../Styles/metrics';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import {Colors} from '../../Styles/Colors';
import {RFValue} from 'react-native-responsive-fontsize';

interface CustomButtonProps {
  text: string;
  onpress: (event: GestureResponderEvent) => void;
  color?: string;
  textColor?: string;
}

const CustomButton = (props: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: props.color}]}
      onPress={props.onpress}>
      <Text style={[styles.signUpText, {color: props.textColor}]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    marginTop: metrics.hp4,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.lightBlue,
    borderRadius: metrics.hp5,
    height: metrics.hp8,
    fontSize: RFValue(14),
    width: metrics.wp90,
    alignItems: 'center',
  },
  signUpText: {
    alignItems: 'center',
    fontSize: RFValue(14),
    width: metrics.hp90,
    textAlign: 'center',
    color: Colors.white,
  },
});
