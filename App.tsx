import 'react-native-gesture-handler';
import React from 'react';
import {StackNavigator} from './src/navigators/StackNavigator';
import {ThemeContextProvider} from './src/context/themeContext/ThemeProvider';

export const App = () => {
  return (
    /* aquí solo se tendrá el provider del theme */
    <ThemeContextProvider>
      <StackNavigator />
    </ThemeContextProvider>
  );
};
