import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import ScrollableItem from '../../../components/molecules/ScrollableItem';

const ScrollableImage = () => {
  const navigation = useNavigation();
  return (
    <View marginBottom={46}>
      <View>
        <Text style={{fontSize: 13, fontWeight: 'bold', marginBottom: 27}}>
          WHAT'S NEW TODAY
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal>
          <ScrollableItem
            onPress={() => navigation.navigate('Views')}
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
};

export default ScrollableImage;
