import React from 'react';
import {FlatList} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  RenderDataItem,
  // RenderHeaderList,
  RenderItemSeparator,
} from '../components/FlatListCustom';
import {menuItems} from '../menuData/menuData';
import {HeaderTitleComponents} from '../components/HeaderTitleComponents';

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
        ListHeaderComponent={() => (
          <HeaderTitleComponents title="Menu Options" />
        )}
        ItemSeparatorComponent={() => <RenderItemSeparator />} // como función y renderizando el componente desde otro archivo

        // ListHeaderComponent={() =>
        //   HeaderTitleComponents({title: 'Menu Options'})
        // }

        // ItemSeparatorComponent={RenderItemSeparator} // forma directa ya que no se le manda ningún argumento y al final de cuentas un componente es una función que retonar un elemento JSX
        // ItemSeparatorComponent={() => RenderItemSeparator()} // forma como función completa sin pasarle argumentos
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

/* En ListHeaderComponent={} y también ItemSeparatorComponent={} vemos que hay dos formas de llamar al componente, una forma como una función () y otra forma de llamarla como componente </>, entonces:

La diferencia entre llamar a un componente como una función clásica () y llamarlo como un componente tal cual </> radica principalmente en cómo se manejan las actualizaciones y re-renderizaciones en React.

Cuando usas una función clásica () para llamar a un componente, se crea una nueva instancia de la función cada vez que el componente padre se renderiza. Esto significa que, si el componente padre se re-renderiza, también se re-crea la función y, por lo tanto, se re-crea el componente hijo. Esto puede causar re-renderizaciones innecesarias y afectar el rendimiento de la aplicación.

Por otro lado, cuando utilizas la sintaxis </> para llamar al componente, React trata el componente como un elemento JSX y lo agrega directamente al árbol de componentes. Esto significa que el componente se mantendrá en el árbol de componentes existente y solo se actualizará si es necesario (por ejemplo, si las props cambian). Esto es más eficiente y evita re-renderizaciones innecesarias.

Entonces, basados en lo que mencioné anteriormente, podríamos decir que utilizar la sintaxis </> para llamar a un componente es más eficiente y generalmente se considera una mejor práctica, ya que evita re-creaciones innecesarias del componente y mejora el rendimiento de la aplicación. Sin embargo, ambas formas funcionan y puedes elegir la que te resulte más cómoda o adecuada para tu caso específico. */
