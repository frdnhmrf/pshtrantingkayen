import React from 'react';
import {TouchableOpacity} from 'react-native';
import TextBox from '../../atoms/TextBox';
const BoxButton = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        backgroundColor: props.bgColor,
        borderWidth: 2,
        height: 52,
        borderRadius: 6,
      }}>
      <TextBox title={props.title} color={props.color} />
    </TouchableOpacity>
  );
};

export default BoxButton;
