import React from 'react';
import {FlatList} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MenuItemInterface} from '../interfaces/FlatListCustomInterfaces';
import {
  RenderDataItem,
  RenderHeaderList,
  RenderItemSeparator,
} from '../components/FlatListCustom';

const menuItems: MenuItemInterface[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    componentName: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    componentName: 'Animation102Screen',
  },
];

export const HomeScreen = () => {
  /* ¿Por qué usamos useSafeAreaInsets() en vez de usar el componente de <SafeAreaView></SafeAreaView>? */
  /* según la documentación https://reactnavigation.org/docs/handling-safe-area indica que el componente SafeAreaView tiene algunos problemas y para ello recomiendan hacer uso de react-native-safe-area-context:
    "Nota: La biblioteca react-native-safe-area-context también exporta un componente SafeAreaView. Si bien funciona en Android, también tiene los mismos problemas relacionados con el comportamiento de salto al animar. Por lo que recomendamos utilizar siempre el hook useSafeAreaInsets y evitar el uso del componente SafeAreaView."
  Aparte según indica la documentación https://reactnative.dev/docs/safeareaview SafeAreaView solo es aplicable para dispositivos iOS v11+ lo cual puede ser incoveniente si la aplicación tambien funcionara para versiones anteriores. */
  const insets = useSafeAreaInsets();

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
        contentContainerStyle={{flex: 1}} // para que ocupe toda la pantalla
        data={menuItems}
        renderItem={({item}) => <RenderDataItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <RenderHeaderList />} // como función y renderizando el componente desde otro archivo
        ItemSeparatorComponent={() => <RenderItemSeparator />}
        // ListHeaderComponent={RenderHeaderList} // forma directa ya que no se le manda ningún argumento y al final de cuentas un componente es una función
        // ItemSeparatorComponent={RenderItemSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
