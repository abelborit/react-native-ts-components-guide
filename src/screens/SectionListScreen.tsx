import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BackToHomeBtn} from '../components/BackToHomeBtn';
import {RenderItemSeparator} from '../components/FlatListCustom';
import {HeaderTitleComponents} from '../components/HeaderTitleComponents';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {RootStackParams} from '../navigators/StackNavigator';

interface HouseInterface {
  houseName: string;
  data: string[];
}

const housesData: HouseInterface[] = [
  {
    houseName: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    houseName: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Thor',
      'Spiderman',
    ],
  },
  {
    houseName: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
    ],
  },
];

interface SectionListScreenProps
  extends StackScreenProps<RootStackParams, 'SectionListScreen'> {}

export const SectionListScreen = ({navigation}: SectionListScreenProps) => {
  const {theme} = useContext(ThemeContext);
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
      {/* <HeaderTitleComponents title="Section List Component" /> */}

      <SectionList
        sections={housesData}
        renderItem={({item}) => (
          <Text style={{fontSize: 16, color: theme.colors.text}}>{item}</Text>
        )}
        keyExtractor={(item, index) => item + index}
        stickySectionHeadersEnabled={true} // efecto para los headers
        // showsVerticalScrollIndicator={false}
        /*  */
        ListHeaderComponent={() => (
          <HeaderTitleComponents title="Section List Component" />
        )} // para que tenga el mismo efecto de stickySectionHeadersEnabled pero con el header de todo el componente y con eso nos evitamos colocarlo fuera de <SectionList /> como componente hermano (si es necesario que se vea entonces que se quede afuea de SectionList y eliminar esta propiedad)
        ListFooterComponent={() => (
          <View
            style={{
              marginVertical: 30,
              backgroundColor: theme.colors.background,
            }}>
            <HeaderTitleComponents
              title={`Total houses: ${housesData.length}`}
            />
          </View>
        )}
        /*  */
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: theme.colors.background}}>
            {/* se coloca dentro de un View porque parece que al hacer scroll el texto aparece por debajo del HeaderTitleComponents y da un efecto feo, por eso se establece que tenga un backgroundColor blanco */}
            <HeaderTitleComponents title={section.houseName} />
          </View>
        )}
        renderSectionFooter={({section}) => (
          <View style={{backgroundColor: theme.colors.background}}>
            {/* se coloca dentro de un View porque parece que al hacer scroll el texto aparece por debajo del HeaderTitleComponents y da un efecto feo, por eso se establece que tenga un backgroundColor blanco */}
            <HeaderTitleComponents
              title={`Total data: ${section.data.length}`}
            />
          </View>
        )}
        /*  */
        SectionSeparatorComponent={() => <RenderItemSeparator />}
        ItemSeparatorComponent={() => <RenderItemSeparator />}
      />

      <BackToHomeBtn theme={theme} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
