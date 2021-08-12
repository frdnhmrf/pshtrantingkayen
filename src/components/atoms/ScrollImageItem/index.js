import React from 'react';
import {View, Image} from 'react-native';

const ScrollImageItem = props => {
  return (
    <View>
      <Image source={props.img} style={{height: 343, width: 343}} />
    </View>
  );
};

export default ScrollImageItem;
