import React from 'react';
import {View} from 'react-native';
import FeedAtomLarge from '../../atoms/FeedAtomLarge';
import FeedAtomMedium from '../../atoms/FeedAtomMedium';

const HomeFeedRight = () => {
  return (
    <View>
      <FeedAtomLarge img={require('../../../assets/images/feedlarge.png')} />
      <FeedAtomLarge img={require('../../../assets/images/feedlarge.png')} />
      <FeedAtomMedium img={require('../../../assets/images/feedmedium.png')} />
      <FeedAtomLarge img={require('../../../assets/images/feedlarge.png')} />
      <FeedAtomMedium img={require('../../../assets/images/feedmedium.png')} />
    </View>
  );
};

export default HomeFeedRight;
