import React from 'react';
import {View, Image} from 'react-native';

const FeedAtomMedium = props => {
  return (
    <View marginBottom={16}>
      <Image source={props.img} style={{height: 220, width: 167}} />
    </View>
  );
};

export default FeedAtomMedium;
