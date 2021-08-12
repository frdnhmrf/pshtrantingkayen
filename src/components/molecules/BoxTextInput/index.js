import React from 'react';
import {View} from 'react-native';
import TextInputBox from '../../atoms/TextIputBox';

const BoxTextInput = props => {
  return (
    <View
      style={{
        marginBottom: 16,
        borderWidth: 2,
        height: 52,
      }}>
      <TextInputBox placeholder={props.placeholder} />
    </View>
  );
};

export default BoxTextInput;
