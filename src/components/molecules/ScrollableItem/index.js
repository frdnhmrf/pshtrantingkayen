import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Profile from '../../atoms/Profile';
import ScrollImageItem from '../../atoms/ScrollImageItem';

const ScrollableItem = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View marginRight={16}>
        <ScrollImageItem img={props.img} marginLeft={6} />
        <View marginTop={16}>
          <Profile
            img={props.imgAccount}
            name={props.name}
            username={props.username}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ScrollableItem;
