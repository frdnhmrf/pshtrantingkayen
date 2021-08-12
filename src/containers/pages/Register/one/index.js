import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import BackAtom_V1 from '../../../../components/atoms/BackAtom_V1';
import BoxButton from '../../../../components/molecules/BoxButton';
import BoxTextInput from '../../../../components/molecules/BoxTextInput';

const Register = () => {
  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: 16}}>
        <BackAtom_V1 />
        <View style={{marginBottom: 32}}>
          <Text style={{fontSize: 36, marginLeft: 20 - 16}}>Register</Text>
        </View>
        <BoxTextInput placeholder="E-mail atau Nomor posel" />
        <BoxTextInput placeholder="Password" />
        <BoxButton title="NEXT" bgColor="black" color="white" />
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({});
