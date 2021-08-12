import React, {Component} from 'react';
import {View} from 'react-native';
import HomeFeedRight from '../../../components/molecules/HomeFeedLeft';
import HomeFeedLeft from '../../../components/molecules/HomeFeedRight';

export class ProfileMainFeed extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <HomeFeedLeft />
        </View>
        <View>
          <HomeFeedRight />
        </View>
      </View>
    );
  }
}

export default ProfileMainFeed;
