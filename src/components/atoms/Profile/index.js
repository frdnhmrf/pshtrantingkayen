import React from 'react';
import {View, Text, Image} from 'react-native';

const Profile = props => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View>
        <Image
          source={props.img}
          style={{height: 30, width: 30, borderRadius: 15}}
        />
      </View>
      <View>
        <Text style={{fontSize: 13, fontWeight: 'bold'}}>{props.name}</Text>
        <Text style={{fontSize: 11}}>{props.username}</Text>
      </View>
    </View>
  );
};

export default Profile;
