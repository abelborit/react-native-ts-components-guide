import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BackToHomeBtn} from '../components/BackToHomeBtn';
import {HeaderTitleComponents} from '../components/HeaderTitleComponents';
import {SwitchCustom} from '../components/SwitchCustom';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {RootStackParams} from '../navigators/StackNavigator';

interface SwitchScreenProps
  extends StackScreenProps<RootStackParams, 'SwitchScreen'> {}

export const SwitchScreen = ({navigation}: SwitchScreenProps) => {
  const {theme} = useContext(ThemeContext);
  const [switchState, setSwitchState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const insets = useSafeAreaInsets();

  const handleChange = (
    value: boolean, // viene del componente SwitchCustom.tsx
    fieldText: keyof typeof switchState, // para que tome sí o sí de lo que tiene el switchState
    // fieldText: string, // para que acepte cualquier string
  ) => {
    setSwitchState({
      ...switchState,
      [fieldText]: value,
    });
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
      <HeaderTitleComponents title="Switch Component" />

      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: theme.colors.primary}}>
          isActive
        </Text>
        <SwitchCustom
          isOn={switchState.isActive}
          onChange={value => handleChange(value, 'isActive')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: theme.colors.primary}}>
          isHungry
        </Text>
        <SwitchCustom
          isOn={switchState.isHungry}
          onChange={value => handleChange(value, 'isHungry')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: theme.colors.primary}}>
          isHappy
        </Text>
        <SwitchCustom
          isOn={switchState.isHappy}
          onChange={value => handleChange(value, 'isHappy')}
        />
      </View>

      <Text style={{...styles.switchState, color: theme.colors.primary}}>
        {JSON.stringify(switchState, null, 3)}
      </Text>

      <BackToHomeBtn theme={theme} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  switchText: {
    fontSize: 24,
  },
  switchState: {
    fontSize: 24,
    marginVertical: 40,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
});
