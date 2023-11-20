import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HeaderTitleComponents} from '../components/HeaderTitleComponents';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigators/StackNavigator';
import {useForm} from '../hooks/useForm';
import {SwitchCustom} from '../components/SwitchCustom';

interface TextInputScreenProps
  extends StackScreenProps<RootStackParams, 'TextInputScreen'> {}

const initialStateForm = {
  name: '',
  email: '',
  phone: '',
  isSubscribed: false,
};

export const TextInputScreen = ({navigation}: TextInputScreenProps) => {
  const insets = useSafeAreaInsets();

  const {formState, handleChangeForm} = useForm(initialStateForm);

  return (
    <ScrollView>
      <View
        style={{
          ...styles.container,
          marginTop: insets.top + 15,
          marginBottom: insets.bottom + 15,
          marginLeft: insets.left + 15,
          marginRight: insets.right + 15,
        }}>
        <HeaderTitleComponents title="Text Input Component" />

        <Text style={styles.formState}>
          {JSON.stringify(formState, null, 3)}
        </Text>

        <TextInput
          style={styles.inputStyle}
          onChangeText={value => handleChangeForm(value, 'name')}
          value={formState.name}
          placeholder="Put your name here"
          autoCorrect={false} // para evitar que me corrija las palabras que voy escribiendo
          autoCapitalize="words"
          keyboardAppearance="dark" // cambiar el color del teclado según también el theme de la configuración del celular. Por ahora funciona solo en iOS
        />

        <TextInput
          style={styles.inputStyle}
          onChangeText={value => handleChangeForm(value, 'email')}
          value={formState.email}
          placeholder="example.email@email.com"
          autoCorrect={false}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <View style={{gap: 12, marginVertical: 12}}>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, ad
            a sunt facere labore voluptatem in autem doloremque ipsa voluptas
            sed ea soluta. Iste adipisci velit id illo accusamus unde? lorem
          </Text>

          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, ad
            a sunt facere labore voluptatem in autem doloremque ipsa voluptas
            sed ea soluta. Iste adipisci velit id illo accusamus unde? lorem
          </Text>

          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, ad
            a sunt facere labore voluptatem in autem doloremque ipsa voluptas
            sed ea soluta. Iste adipisci velit id illo accusamus unde? lorem
          </Text>

          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, ad
            a sunt facere labore voluptatem in autem doloremque ipsa voluptas
            sed ea soluta. Iste adipisci velit id illo accusamus unde? lorem
          </Text>

          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, ad
            a sunt facere labore voluptatem
          </Text>
        </View>

        <View style={styles.switchRow}>
          <Text style={styles.switchText}>Suscribirse</Text>
          <SwitchCustom
            isOn={formState.isSubscribed}
            onChange={value => handleChangeForm(value, 'isSubscribed')}
          />
        </View>

        <TextInput
          style={styles.inputStyle}
          onChangeText={value => handleChangeForm(value, 'phone')}
          value={formState.phone}
          placeholder="000 000 000"
          keyboardType="phone-pad"
        />

        <View style={{height: 30}} />

        <Button
          color={'#d00'}
          title="Back to Home"
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  inputStyle: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 12,
    marginVertical: 8,
    borderRadius: 10,
  },
  formState: {
    fontSize: 20,
    marginBottom: 20,
    color: '#333',
  },
  switchText: {
    fontSize: 24,
    color: '#333',
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginVertical: 8,
  },
});
