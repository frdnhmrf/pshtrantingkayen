import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import BackAtom_V1 from '../../../../components/atoms/BackAtom_V1';
import BoxButton from '../../../../components/molecules/BoxButton';
import BoxTextInput from '../../../../components/molecules/BoxTextInput';

const Registertwo = () => {
  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: 16}}>
        <BackAtom_V1 />
        <View style={{marginBottom: 32}}>
          <Text style={{fontSize: 36, marginLeft: 20 - 16}}>Register</Text>
        </View>
        <BoxTextInput placeholder="Username" />
        <BoxButton title="SING UP" bgColor="black" color="white" />
        <Text style={{fontSize: 13, fontWeight: 'normal', marginTop: 30}}>
          By signing up, you agree to Photo’s Terms of Service and Privacy
          Policy.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Registertwo;
