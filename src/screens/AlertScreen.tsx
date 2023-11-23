import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParams} from '../navigators/StackNavigator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HeaderTitleComponents} from '../components/HeaderTitleComponents';
import {BackToHomeBtn} from '../components/BackToHomeBtn';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface AlertScreenProps
  extends StackScreenProps<RootStackParams, 'AlertScreen'> {}

export const AlertScreen = ({navigation}: AlertScreenProps) => {
  const {theme} = useContext(ThemeContext);
  const insets = useSafeAreaInsets();

  const handleShowAlert1 = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ],
      {
        /* para hacer click afuera de la alerta y salir de esa alerta. Sería mejor obligar al usuario que presione el botón de cancelar */
        cancelable: true,
      },
    );

  const handleShowAlert2 = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ],
      {
        cancelable: true,
      },
    );

  const handleShowAlert3 = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => Alert.alert('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {
        /* para hacer click afuera de la alerta y salir de esa alerta y luego aparece otra alerta */
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
          ),
      },
    );

  /* Alert Prompt solo funciona con iOS, para Android se podría usar un paquete de terceros o sino hacer un modal desde cero */
  const handleShowPromptAlert1 = () =>
    Alert.prompt(
      'Prompt Alert Title',
      'My Alert Msg',
      /* Prompt Alert se puede mandar un callback o sino un array para los botones */
      (text: string) => console.log(`info: ${text}`),
      // [
      //  {
      //    text: 'Cancel',
      //    onPress: () => Alert.alert('Cancel Pressed'),
      //    style: 'cancel',
      //  },
      // ]
      'plain-text', // forma del texto
      'Valor por defecto', // texto por defecto
      'number-pad', // escoger teclado para este prompt, si no se manda nada entonces es el teclado por defecto
    );

  return (
    <View
      style={{
        ...styles.container,
        marginTop: insets.top + 15,
        marginBottom: insets.bottom + 15,
        marginLeft: insets.left + 15,
        marginRight: insets.right + 15,
      }}>
      <HeaderTitleComponents title="Alert Component" />

      <View style={styles.containerAlertsBtn}>
        <Button
          color={'#4441d3'}
          title="1 - Show Alert"
          onPress={() => handleShowAlert1()}
        />

        <Button
          color={'#9b41d3'}
          title="2 - Show Alert"
          onPress={() => handleShowAlert2()}
        />

        <Button
          color={'#41d38c'}
          title="3 - Show Alert"
          onPress={() => handleShowAlert3()}
        />

        <Text
          style={{
            textAlign: 'center',
            marginTop: 10,
            marginBottom: -10,
            fontSize: 16,
            color: theme.colors.primary,
          }}>
          El Prompt Alert solo funciona para iOS
        </Text>
        <Button
          color={'#d341b1'}
          title="4 - Show Prompt Alert"
          onPress={() => handleShowPromptAlert1()}
        />
      </View>

      <BackToHomeBtn theme={theme} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  containerAlertsBtn: {
    marginBottom: 100,
    gap: 20,
  },
});
