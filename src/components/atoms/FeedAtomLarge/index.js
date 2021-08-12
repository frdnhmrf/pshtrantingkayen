import React from 'react';
import {View, Image} from 'react-native';

const FeedAtomLarge = props => {
  return (
    <View marginBottom={16}>
      <Image source={props.img} style={{height: 310, width: 167}} />
    </View>
  );
};

export default FeedAtomLarge;
