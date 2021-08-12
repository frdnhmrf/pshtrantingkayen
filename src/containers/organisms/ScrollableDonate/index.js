import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import ScrollableItem from '../../../components/molecules/ScrollableItem';
import FlexBox from '../../../components/atoms/FlexBox';

export class ScrollableDonate extends Component {
  render() {
    return (
      <View marginBottom={46}>
        <View>
          <Text style={{fontSize: 13, fontWeight: 'bold', marginBottom: 27}}>
            TRENDING
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <ScrollView horizontal>
            <ScrollableItem
              img={require('../../../assets/images/imagescroll_1.png')}
              imgAccount={require('../../../assets/images/Account_1.png')}
              name="Ferdian Husnal Ma'ruf"
              username="@frdnhmrf"
            />
            <ScrollableItem
              img={require('../../../assets/images/imagescroll_2.png')}
              imgAccount={require('../../../assets/images/Account_2.png')}
              name="Ferdian Husnal Ma'ruf"
              username="@frdnhmrf"
            />
            <ScrollableItem
              img={require('../../../assets/images/imagescroll_3.png')}
              imgAccount={require('../../../assets/images/Account_2.png')}
              name="Ferdian Husnal Ma'ruf"
              username="@frdnhmrf"
            />
            <ScrollableItem
              marginRight={0}
              img={require('../../../assets/images/imagescroll_4.png')}
              imgAccount={require('../../../assets/images/Account_2.png')}
              name="Ferdian Husnal Ma'ruf"
              username="@frdnhmrf"
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default ScrollableDonate;
