import React from 'react';
import {StyleSheet, View} from 'react-native';

const NavBarIcon = props => {
  return (
    <View style={styles.background}>
      <View style={styles.img}>{props.Icon}</View>
    </View>
  );
};

export default NavBarIcon;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {width: 26, height: 26},
});
