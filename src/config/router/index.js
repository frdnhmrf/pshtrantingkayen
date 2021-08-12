import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import {View} from 'react-native';
import IconAccounts from '../../assets/icons/account.svg';
import IconStory from '../../assets/icons/add.svg';
import IconChats from '../../assets/icons/chat.svg';
import IconDonate from '../../assets/icons/donation.svg';
import IconHome from '../../assets/icons/home.svg';
import {Account, Chat, Donate, Home, Views} from '../../containers/pages';

const BottomNav = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={BottomTabs} />
      <Stack.Screen name="Views" component={Views} />
    </Stack.Navigator>
  );
};

const BottomTabs = () => {
  return (
    <BottomNav.Navigator
      shifting={false}
      initialRouteName={Home}
      activeColor="#FFF338"
      barStyle={{backgroundColor: 'black'}}>
      <BottomNav.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <View style={{marginTop: -4}}>
              {color == '#FFF338' ? (
                <IconHome
                  fill={'white'}
                  style={{
                    height: 25,
                    width: 25,
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                />
              ) : (
                <IconHome
                  fill={'lightgrey'}
                  style={{
                    height: 25,
                    width: 25,
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                />
              )}
            </View>
          ),
        }}
      />
      <BottomNav.Screen
        name="Donate"
        component={Donate}
        options={{
          tabBarIcon: ({color}) => (
            <View style={{marginTop: -4}}>
              {color == '#FFF338' ? (
                <IconDonate
                  fill={'white'}
                  style={{
                    height: 25,
                    width: 25,
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                />
              ) : (
                <IconDonate
                  fill={'lightgrey'}
                  style={{
                    height: 25,
                    width: 25,
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                />
              )}
            </View>
          ),
        }}
      />
      <BottomNav.Screen
        name="Story"
        component={Views}
        options={{
          tabBarIcon: ({color}) => (
            <View
              style={{
                marginTop: -4,
                height: 25,
                width: 25,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'lightgrey',
              }}>
              <IconStory
                fill={'black'}
                style={{
                  height: undefined,
                  width: undefined,
                  flex: 1,
                  resizeMode: 'contain',
                }}
              />
            </View>
          ),
        }}
      />
      <BottomNav.Screen
        name="Chats"
        component={Chat}
        options={{
          tabBarIcon: ({color}) => (
            <View style={{marginTop: -4}}>
              {color == '#FFF338' ? (
                <IconChats
                  fill={'white'}
                  style={{
                    height: 25,
                    width: 25,
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                />
              ) : (
                <IconChats
                  fill={'lightgrey'}
                  style={{
                    height: 25,
                    width: 25,
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                />
              )}
            </View>
          ),
        }}
      />
      <BottomNav.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({color}) => (
            <View style={{marginTop: -4}}>
              {color == '#FFF338' ? (
                <IconAccounts
                  fill={'white'}
                  style={{
                    height: 25,
                    width: 25,
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                />
              ) : (
                <IconAccounts
                  fill={'lightgrey'}
                  style={{
                    height: 25,
                    width: 25,
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                />
              )}
            </View>
          ),
        }}
      />
    </BottomNav.Navigator>
  );
};

export default class Router extends Component {
  render() {
    return (
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    );
  }
}
