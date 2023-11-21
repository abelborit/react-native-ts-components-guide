import {StackScreenProps} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  // Image,
  // ListRenderItemInfo,
  StyleSheet,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HeaderTitleComponents} from '../components/HeaderTitleComponents';
import {RootStackParams} from '../navigators/StackNavigator';
import {FadeInImage} from '../components/FadeInImage';

interface InfiniteScrollScreenProps
  extends StackScreenProps<RootStackParams, 'ModalScreen'> {}

// const FlatListRenderItem = ({item}: ListRenderItemInfo<number>) => { // otra forma de hacerlo
const FlatListRenderItem = (item: number) => {
  return (
    /* En Android el <Image /> tiene por defecto un efecto fadeIn al cargar la imagen pero en iOS no lo tiene. Para eso se podría crear un componente con animación para que funcione igual en Android e iOS y por eso se creó el componente <FadeInImage /> */
    // <Image
    //   source={{uri: `https://picsum.photos/id/${item}/400/400`}}
    //   style={{width: '100%', height: 300, marginVertical: 10, borderRadius: 20}}
    // />

    <FadeInImage
      uriProp={`https://picsum.photos/id/${item}/500/500`}
      animatedImageStyle={styles.imageStyle}
    />
  );
};

export const InfiniteScrollScreen = ({
  navigation,
}: InfiniteScrollScreenProps) => {
  const [numbersArray, setNumbersArray] = useState([0, 1, 2, 3, 4, 5]);
  const insets = useSafeAreaInsets();

  /* función para hacer un bucle para que se vaya añadiendo 5 elementos nuevos */
  const handleLoadMoreData = () => {
    const newArray: number[] = [];

    for (let i = 0; i < 5; i++) {
      newArray[i] = numbersArray.length + i;
    }

    /* para simular que se demora 1.5 segundos en hacer una petición http */
    setTimeout(() => {
      setNumbersArray([...numbersArray, ...newArray]);
    }, 1500);
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
      <FlatList
        data={numbersArray}
        // renderItem={item => FlatListRenderItem(item)} // usando el ListRenderItemInfo<number> de arriba
        renderItem={({item}) => FlatListRenderItem(item)}
        keyExtractor={item => item.toString()}
        ListHeaderComponent={
          <>
            <HeaderTitleComponents title="Infinite Scroll Component" />
            <Button
              color={'#d00'}
              title="Back to Home"
              onPress={() => {
                navigation.navigate('HomeScreen');
              }}
            />
            <View style={{marginBottom: 30}} />
          </>
        }
        ListFooterComponent={
          <View
            style={{
              marginVertical: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={35} color={'#d00'} />
          </View>
        }
        onEndReached={handleLoadMoreData} // función que se dispara cuando llega al fondo de la pantalla. Se está pasando por referencia o la referencia de la función handleLoadMoreData ya que de la forma tradicional sería ()=> handleLoadMoreData()
        onEndReachedThreshold={0.5} // nos indica qué tan lejos debemos de estar del fondo de la pantalla (en este caso 0.5 que sería como un 50% de la pantalla) para que que se lance onEndReached={}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textItem: {
    fontSize: 16,
    backgroundColor: 'gray',
    height: 150,
    marginVertical: 10,
  },
  imageStyle: {
    width: '100%',
    height: 300,
    marginVertical: 10,
    borderRadius: 20,
    zIndex: 999,
  },
});
