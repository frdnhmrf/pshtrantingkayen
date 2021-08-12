import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackAtom_V1 from '../../../components/atoms/BackAtom_V1';
import BoxButton from '../../../components/molecules/BoxButton';
import BoxTextInput from '../../../components/molecules/BoxTextInput';

const Login = () => {
  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: 16}}>
        <BackAtom_V1 />
        <View style={{marginBottom: 32}}>
          <Text style={{fontSize: 36, marginLeft: 20 - 16}}>Login</Text>
        </View>
        <BoxTextInput placeholder="E-mail atau Nomor posel" />
        <BoxTextInput placeholder="Password" />
        <BoxButton title="Login" bgColor="black" color="white" />
        <View marginTop={20} flexDirection={'row'}>
          <Text style={{maxWidth: '60%', marginRight: 30}}>
            Apakah Anda belum memiliki akun silahkan daftar terlebih dahulu
          </Text>
          <TouchableOpacity
            style={{
              height: 40,
              borderRadius: 10,
              width: 60,
              backgroundColor: 'black',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white'}}>Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
