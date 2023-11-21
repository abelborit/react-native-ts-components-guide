import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {Animation101Screen} from '../screens/Animation101Screen';
import {Animation102Screen} from '../screens/Animation102Screen';
import {SwitchScreen} from '../screens/SwitchScreen';
import {AlertScreen} from '../screens/AlertScreen';
import {TextInputScreen} from '../screens/TextInputScreen';
import {PullToRefreshScreen} from '../screens/PullToRefreshScreen';
import {SectionListScreen} from '../screens/SectionListScreen';
import {ModalScreen} from '../screens/ModalScreen';
import {InfiniteScrollScreen} from '../screens/InfiniteScrollScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  Animation101Screen: undefined;
  Animation102Screen: undefined;
  SwitchScreen: undefined;
  AlertScreen: undefined;
  TextInputScreen: undefined;
  PullToRefreshScreen: undefined;
  SectionListScreen: undefined;
  ModalScreen: undefined;
  InfiniteScrollScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // headerStyle: {
        //   elevation: 0, // quitar la linea abajo del header en Android
        //   shadowColor: 'transparent', // quitar la linea abajo del header en iOS
        //   backgroundColor: '#ddd',
        // },
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Stack.Screen
        name="HomeScreen"
        options={{title: 'Home'}}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Animation101Screen"
        options={{title: 'Animation 101'}}
        component={Animation101Screen}
      />
      <Stack.Screen
        name="Animation102Screen"
        options={{title: 'Animation 102'}}
        component={Animation102Screen}
      />
      <Stack.Screen
        name="SwitchScreen"
        options={{title: 'Switch'}}
        component={SwitchScreen}
      />
      <Stack.Screen
        name="AlertScreen"
        options={{title: 'Alert'}}
        component={AlertScreen}
      />
      <Stack.Screen
        name="TextInputScreen"
        options={{title: 'Text Input'}}
        component={TextInputScreen}
      />
      <Stack.Screen
        name="PullToRefreshScreen"
        options={{title: 'Pull To Refresh'}}
        component={PullToRefreshScreen}
      />
      <Stack.Screen
        name="SectionListScreen"
        options={{title: 'Section List'}}
        component={SectionListScreen}
      />
      <Stack.Screen
        name="ModalScreen"
        options={{title: 'Modal'}}
        component={ModalScreen}
      />
      <Stack.Screen
        name="InfiniteScrollScreen"
        options={{title: 'Infinite Scroll'}}
        component={InfiniteScrollScreen}
      />
    </Stack.Navigator>
  );
};
