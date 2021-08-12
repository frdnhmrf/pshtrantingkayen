import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const LoggedOut = () => {
  return (
    <View>
      <View style={{width: 'auto', height: 707, position: 'relative'}}>
        <Image
          source={require('../../../assets/images/hatibersinar.jpeg')}
          style={{
            width: undefined,
            height: undefined,
            flex: 1,
            resizeMode: 'cover',
          }}
        />
        <View
          style={{
            position: 'absolute',
            left: 10,
            bottom: 30,
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              marginRight: 8,
            }}>
            <Image
              source={require('../../../assets/logo/logo-psht.jpg')}
              style={{
                width: undefined,
                height: undefined,
                flex: 1,
                resizeMode: 'contain',
              }}
            />
          </View>
          <View>
            <Text
              style={{
                color: 'white',
                fontSize: 13,
                fontWeight: 'bold',
                marginBottom: 5,
              }}>
              PSHT Ranting Kayen
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 11,
                fontWeight: 'normal',
              }}>
              Copy Right 2021
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 20,
          paddingHorizontal: 16,
        }}>
        <View
          style={{
            width: 167,
            height: 52,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 6,
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 13,
            }}>
            LOGIN
          </Text>
        </View>
        <View
          style={{
            width: 167,
            height: 52,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 6,
            alignSelf: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 13,
              color: 'white',
            }}>
            REGISTER
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoggedOut;

const styles = StyleSheet.create({});
