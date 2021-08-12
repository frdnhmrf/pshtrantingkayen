import React from 'react';
import {View, Text, Image, Touchable, TouchableOpacity} from 'react-native';

const ChatMolecule = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          height: 'auto',
          width: 343,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
          marginTop: 16,
        }}>
        <View>
          <Image
            style={{
              height: 64,
              width: 64,
              borderRadius: 64 / 2,
              marginRight: 10,
            }}
            source={props.img}
          />
        </View>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 13, fontWeight: 'bold'}}>{props.name}</Text>
          <Text style={{fontSize: 13, fontWeight: 'normal'}}>{props.msg}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatMolecule;
