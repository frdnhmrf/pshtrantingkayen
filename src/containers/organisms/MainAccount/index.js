import React, {Component} from 'react';
import {Text, View} from 'react-native';
import BoxButton from '../../../components/molecules/BoxButton';
import ProfileAccount from '../../../components/molecules/ProfileAccount';

export class MainAccount extends Component {
  render() {
    return (
      <View>
        <ProfileAccount
          img={require('../../../assets/images/Account_1.png')}
          name="Ferdian"
          place="Jimbaran"
        />
        <BoxButton title="Follow" bgColor="black" color="white" />
        <View marginBottom={16} />
        <BoxButton title="Message" color="black" />
        <View marginBottom={32} />
      </View>
    );
  }
}

export default MainAccount;
