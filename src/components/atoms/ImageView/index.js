import React from 'react';
import {View, Image} from 'react-native';

const ImageView = props => {
  return (
    <View>
      <Image source={props.img} style={{height: '100%', width: '100%'}} />
    </View>
  );
};

export default ImageView;
