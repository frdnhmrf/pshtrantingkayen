import React, {Component} from 'react';
import {View} from 'react-native';
import FlexBox from '../../../components/atoms/FlexBox';
import ChatMolecule from '../../../components/molecules/ChatMolecule';

export class MainChat extends Component {
  render() {
    return (
      <View>
        <FlexBox />
        <ChatMolecule
        onPress={}
          img={require('../../../assets/images/Account_1.png')}
          name="Ferdian"
          msg="Thank you! That was very helpful!"
        />
        <FlexBox />
        <ChatMolecule
          img={require('../../../assets/images/Account_1.png')}
          name="Ferdian"
          msg="I know... I’m trying to get the funds."
        />
        <FlexBox />
        <ChatMolecule
          img={require('../../../assets/images/Account_1.png')}
          name="Ferdian"
          msg="I’m looking for tips around capturing the milky way. I have a 6D with a 24-100mm..."
        />
        <FlexBox />
        <ChatMolecule
          img={require('../../../assets/images/Account_1.png')}
          name="Ferdian"
          msg="Wanted to ask if you’re available for a portrait shoot next week."
        />
        <FlexBox />
      </View>
    );
  }
}

export default MainChat;
