import React from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import MainAccount from '../../organisms/MainAccount';
import ProfileMainFeed from '../../organisms/ProfileMainFeed';
import BoxButton from '../../../components/molecules/BoxButton';

const Account = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View paddingHorizontal={16}>
          <MainAccount />
          <ProfileMainFeed />
          <BoxButton title="SEE MORE" color="black" />
          <View style={{marginBottom: 16}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;
