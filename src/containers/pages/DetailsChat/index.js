import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const DetailChat = () => {
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
      </View>
    </SafeAreaView>
  );
};

export default DetailChat;
