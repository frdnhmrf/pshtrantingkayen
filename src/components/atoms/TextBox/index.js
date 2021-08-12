import React from 'react';
import {Text} from 'react-native';

export default function TextBox(props) {
  return (
    <Text
      style={{
        textAlign: 'center',
        fontWeight: 'bold',
        color: props.color,
        fontSize: 13,
        paddingTop: 52 / 4,
      }}>
      {props.title}
    </Text>
  );
}
