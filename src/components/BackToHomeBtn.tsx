import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ThemeContextStateInterface} from '../context/themeContext/ThemeProvider';
import {RootStackParams} from '../navigators/StackNavigator';

interface BackToHomeBtnInterface {
  theme: ThemeContextStateInterface;
  navigation: StackNavigationProp<RootStackParams>;
}

export const BackToHomeBtn = ({theme, navigation}: BackToHomeBtnInterface) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          ...styles.btnTheme,
          backgroundColor: theme.colorsExtra.secondary,
        }}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={{...styles.btnText, color: theme.colorsExtra.btnTxt}}>
          Back to Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTheme: {
    width: 250,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
