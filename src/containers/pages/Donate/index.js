import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FlexBox from '../../../components/atoms/FlexBox';
import ScrollableDonate from '../../organisms/ScrollableDonate';
import Back_V2 from '../../../assets/icons/back_v2.svg';

const Donate = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          paddingHorizontal: 16,
        }}>
        <View style={{position: 'relative'}}>
          <View style={{position: 'absolute', top: 8, bottom: 0, left: 5}}>
            <TouchableOpacity>
              <Back_V2
                style={{
                  height: 30,
                  width: 30,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                height: 44,
                width: 100,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 17, fontWeight: '600'}}>Donation</Text>
            </View>
          </View>
        </View>
        <FlexBox />
        <ScrollableDonate />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Donate;
