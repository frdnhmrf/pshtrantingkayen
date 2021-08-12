import React from 'react';
import {View, StyleSheet} from 'react-native';
import NavBarIcon from '../../../components/molecules/NavBarIcon';
import IconChats from '../../../assets/icons/donation.svg';
import IconDonate from '../../../assets/icons/donation.svg';
import IconHome from '../../../assets/icons/newHome.svg';
import IconStory from '../../../assets/icons/newstory.svg';
import IconAccounts from '../../../assets/icons/personaccount.svg';

const NavBar = () => {
  return (
    <View
      style={{
        height: 54,
        flexDirection: 'row',
      }}>
      <NavBarIcon>
        <View style={styles.backgroundWireframeBottomNav}>
          <IconHome style={styles.wireframeLogo} />

          <IconDonate style={styles.wireframeLogo} />

          <IconStory style={styles.wireframeLogo} />

          <IconChats style={styles.wireframeLogo} />

          <IconAccounts style={styles.wireframeLogo} />
        </View>
      </NavBarIcon>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  backgroundWireframeBottomNav: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 16,
  },
  wireframeLogo: {width: 30, height: 30},
});
