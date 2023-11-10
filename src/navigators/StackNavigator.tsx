import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';

export type RootStackParams = {
  HomeScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          elevation: 0, // quitar la linea abajo del header en Android
          shadowColor: 'transparent', // quitar la linea abajo del header en iOS
          backgroundColor: '#ddd',
        },
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Stack.Screen
        name="HomeScreen"
        options={{title: 'Home'}}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};
