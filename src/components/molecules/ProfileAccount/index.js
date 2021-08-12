import React from 'react';
import {View, Image, Text} from 'react-native';

const ProfileAccount = props => {
  return (
    <View style={{height: 263, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={props.img}
        style={{height: 128, width: 128, paddingVertical: 32}}
      />
      <Text marginBottom={24} style={{fontSize: 36}}>
        {props.name}
      </Text>
      <Text style={{fontSize: 13, fontWeight: 'bold'}}>{props.place}</Text>
    </View>
  );
};

export default ProfileAccount;
