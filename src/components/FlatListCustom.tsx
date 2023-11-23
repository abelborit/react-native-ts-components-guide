import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MenuItemInterface} from '../interfaces/FlatListCustomInterfaces';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../navigators/StackNavigator';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface RenderDataItemInterface {
  menuItem: MenuItemInterface;
}

/* se está usando ahora el <HeaderTitleComponents /> */
// export const RenderHeaderList = () => {
//   return (
//     <View style={styles.headerContainer}>
//       <Text style={styles.headerText}>Menu Options</Text>
//     </View>
//   );
// };

export const RenderItemSeparator = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <View
      style={{
        ...styles.itemSeparator,
        borderBottomColor: theme.colorsExtra.dividerColor,
      }}
    />
  );
};

export const RenderDataItem = ({menuItem}: RenderDataItemInterface) => {
  const navigator = useNavigation<StackNavigationProp<RootStackParams>>();
  const {theme} = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigator.navigate(menuItem.componentName)}>
      <View style={styles.menuItemContainer}>
        <Icon
          name={menuItem.icon}
          size={25}
          color={theme.colorsExtra.iconsColor}
        />
        <Text style={{...styles.menuItemText, color: theme.colors.text}}>
          {menuItem.name}
        </Text>

        {/* crear un componente View para que se expanda y ocupe el espacio restante pero sin quitarle espacio a los demás componentes. Esto hará que la flecha se vaya al extremo. Tambien se puede crear un componente aparte llamado Spacer y que sería un View con un flex: 1 tal cual está aquí abajo para cumplir esa funcionalidad y poder hacer reutilizable el componente */}
        <View style={{flex: 1 /* , backgroundColor: 'red', height: 5 */}} />
        <Icon
          name="chevron-forward-outline"
          size={25}
          color={theme.colorsExtra.iconsColor}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // headerContainer: {
  //   marginBottom: 10,
  // },
  // headerText: {
  //   fontSize: 35,
  //   fontWeight: 'bold',
  //   color: '#222',
  // },
  menuItemContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#333',
  },
  itemSeparator: {
    borderBottomWidth: 2,
    marginVertical: 10,
  },
});
