import React from 'react';
import {ScrollView, Text, SafeAreaView, View} from 'react-native';
import BoxButton from '../../../components/molecules/BoxButton';
import HomeMainFeed from '../../organisms/HomeMainFeed';
import ScrollableImage from '../../organisms/ScrollableImage';

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          paddingHorizontal: 16,
        }}>
        <Text style={{fontSize: 36, marginBottom: 40}}>Discover</Text>
        <ScrollableImage />
        <Text style={{fontSize: 13, fontWeight: 'bold', marginBottom: 16}}>
          BROWSE ALL
        </Text>
        <HomeMainFeed />
        <BoxButton title="SEE MORE" color="black" />
        <View style={{marginBottom: 16}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
