import {StackScreenProps} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  Alert,
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HeaderTitleComponents} from '../components/HeaderTitleComponents';
import {RootStackParams} from '../navigators/StackNavigator';

interface ModalScreenProps
  extends StackScreenProps<RootStackParams, 'ModalScreen'> {}

export const ModalScreen = ({navigation}: ModalScreenProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const insets = useSafeAreaInsets();

  const handleShowModal = () => {
    setIsModalVisible(!isModalVisible);
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
      <HeaderTitleComponents title="Modal Component" />

      <Modal
        animationType="fade"
        transparent={true} // es como para evitar tener un componente que cubre toda la pantalla
        visible={isModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setIsModalVisible(!isModalVisible);
        }} // cuando el usuario retrocede con los botones propios del celular saldrá una alerta
      >
        {/* background color oscuro con baja opacidad */}
        <View style={styles.modalContainer}>
          {/* contenido del modal */}
          <View style={styles.modalContent}>
            <HeaderTitleComponents title="Hello Modal!!" />
            <Text style={styles.modalText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem id
              doloremque, amet repellendus placeat vitae omnis dolore nulla
              laborum nesciunt corporis minus esse! Voluptatem veniam harum
              ipsam veritatis, facilis est. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </Text>

            {/* para hace espacio para que el botón esté abajo */}
            <View
              style={{flex: 0.95 /* , backgroundColor: 'red', width: '100%' */}}
            />

            <Pressable
              style={[styles.modalBtn, styles.modalBtnClose]}
              onPress={() => handleShowModal()}>
              <Text style={styles.textBtn}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable
        style={[styles.modalBtn, styles.modalBtnOpen]}
        onPress={() => handleShowModal()}>
        <Text style={styles.textBtn}>Show Modal</Text>
      </Pressable>

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
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
  },
  modalContent: {
    flex: 1,
    marginVertical: 40,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    width: '100%',
    color: '#555',
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalBtn: {
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    elevation: 4,
  },
  modalBtnOpen: {
    width: '80%',
    backgroundColor: '#39ab69',
    marginTop: 50,
    marginBottom: 100,
  },
  modalBtnClose: {
    width: '90%',
    backgroundColor: '#2196F3',
  },
  textBtn: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
