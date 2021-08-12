import React from 'react';
import {TextInput} from 'react-native';

export default function TextInputBox(props) {
  return (
    <TextInput
      placeholder={props.placeholder}
      style={{
        fontSize: 13,
        paddingLeft: 10,
        paddingTop: 52 / 4,
      }}
    />
  );
}
