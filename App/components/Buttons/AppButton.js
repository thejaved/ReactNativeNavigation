import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Styles from './Styles';

const AppButton = ({title, onPress, style}) => {
  return (
    <TouchableOpacity style={[Styles.Button, style]} onPress={onPress}>
      <Text style={Styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
