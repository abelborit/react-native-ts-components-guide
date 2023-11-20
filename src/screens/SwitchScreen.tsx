import {StackScreenProps} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParams} from '../navigators/StackNavigator';
import {HeaderTitleComponents} from '../components/HeaderTitleComponents';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SwitchCustom} from '../components/SwitchCustom';

interface SwitchScreenProps
  extends StackScreenProps<RootStackParams, 'SwitchScreen'> {}

export const SwitchScreen = ({navigation}: SwitchScreenProps) => {
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
        <Text style={styles.switchText}>isActive</Text>
        <SwitchCustom
          isOn={switchState.isActive}
          onChange={value => handleChange(value, 'isActive')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHungry</Text>
        <SwitchCustom
          isOn={switchState.isHungry}
          onChange={value => handleChange(value, 'isHungry')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHappy</Text>
        <SwitchCustom
          isOn={switchState.isHappy}
          onChange={value => handleChange(value, 'isHappy')}
        />
      </View>

      <Text style={styles.switchState}>
        {JSON.stringify(switchState, null, 3)}
      </Text>

      <Button
        color={'#d00'}
        title="Back to Home"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  switchText: {
    fontSize: 24,
    color: '#333',
  },
  switchState: {
    fontSize: 24,
    marginVertical: 40,
    color: '#333',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
});
