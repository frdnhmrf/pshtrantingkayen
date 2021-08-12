import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import MainChat from '../../organisms/MainChat';

const Chat = () => {
  return (
    <SafeAreaView>
      <View paddingHorizontal={16}>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              height: 44,
              width: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 17, fontWeight: '600'}}>Chat</Text>
          </View>
        </View>
        <MainChat />
      </View>
    </SafeAreaView>
  );
};

export default Chat;
