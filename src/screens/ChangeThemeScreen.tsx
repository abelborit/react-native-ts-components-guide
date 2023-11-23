import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HeaderTitleComponents} from '../components/HeaderTitleComponents';
import {RootStackParams} from '../navigators/StackNavigator';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {BackToHomeBtn} from '../components/BackToHomeBtn';

interface ChangeThemeScreenProps
  extends StackScreenProps<RootStackParams, 'ChangeThemeScreen'> {}

export const ChangeThemeScreen = ({navigation}: ChangeThemeScreenProps) => {
  const insets = useSafeAreaInsets();
  const {theme, setDarkTheme, setLightTheme} = useContext(ThemeContext);

  const handleChangeTheme = () => {
    navigation.navigate('HomeScreen');

    /* para que de tiempo de regresar al home y luego cambiar el tema porque sino tiene un efecto medio feo */
    setTimeout(() => {
      theme.currentTheme === 'light' ? setDarkTheme() : setLightTheme();
    }, 1); // 1 milisegundo
  };

  return (
    <View
      style={{
        ...styles.container,
        marginTop: insets.top + 15,
        marginBottom: insets.bottom + 15,
        marginLeft: insets.left + 15,
        marginRight: insets.right + 15,
      }}>
      <HeaderTitleComponents title="Change Theme Component" />

      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={{...styles.btnTheme, backgroundColor: theme.colors.primary}}
          activeOpacity={0.8}
          onPress={() => handleChangeTheme()}>
          <Text style={{...styles.btnText, color: theme.colorsExtra.btnTxt}}>
            {theme.currentTheme === 'light' ? 'Dark Theme' : 'Light Theme'}
          </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={{
            ...styles.btnTheme,
            backgroundColor: 'transparent',
            borderWidth: 2,
            borderColor: theme.colors.border,
          }}
          activeOpacity={0.8}
          onPress={() => {}}>
          <Text style={{...styles.btnText, color: theme.colors.primary}}>
            Other Button
          </Text>
        </TouchableOpacity> */}
      </View>

      <BackToHomeBtn theme={theme} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // justifyContent: 'space-between',
    // marginHorizontal: 12,
    marginTop: 40,
    marginBottom: 80,
  },
  btnTheme: {
    width: 160,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
