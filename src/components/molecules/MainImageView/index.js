import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import IconExit from '../../../assets/icons/x.svg';
import ImageView from '../../atoms/ImageView';
import Profile from '../../atoms/Profile';
import {useNavigation} from '@react-navigation/native';
import Home from '../../../containers/pages/Home';

const MainImageView = () => {
  const navigation = useNavigation();
  return (
    <View style={{position: 'relative'}}>
      <ImageView
        style={{position: 'relative'}}
        img={require('../../../assets/images/imageview_1.png')}
      />
      <View
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          height: 300,
          width: '100%',
        }}>
        <View
          style={{
            position: 'relative',
          }}>
          <View
            style={{
              backgroundColor: 'lightgrey',
              height: '45%',
              width: '100%',
              opacity: 30 / 100,
            }}
          />
          <View
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              width: '100%',
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 16,
            }}>
            <Profile
              img={require('../../../assets/images/Account_1.png')}
              name="Ferdian Husnal Ma'ruf"
              username="@frdnhmrf"
            />
            <TouchableOpacity onPress={navigation.goBack()}>
              <IconExit
                style={{
                  height: 30,
                  width: 30,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MainImageView;
