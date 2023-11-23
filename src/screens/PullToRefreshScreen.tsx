import {StackScreenProps} from '@react-navigation/stack';
import React, {useCallback, useContext, useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BackToHomeBtn} from '../components/BackToHomeBtn';
import {HeaderTitleComponents} from '../components/HeaderTitleComponents';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {RootStackParams} from '../navigators/StackNavigator';

interface PullToRefreshScreenProps
  extends StackScreenProps<RootStackParams, 'PullToRefreshScreen'> {}

export const PullToRefreshScreen = ({navigation}: PullToRefreshScreenProps) => {
  const {theme} = useContext(ThemeContext);
  const [refreshing, setRefreshing] = useState(false);
  const [dataState, setDataState] = useState<string>('');
  const insets = useSafeAreaInsets();

  const handleRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('finish refresh');
      setRefreshing(false);
      setDataState('Se cargó el contenido!! ✅');
    }, 2000);
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={handleRefresh}
          progressBackgroundColor={'#fff'} // Android
          colors={['red', 'blue', 'green', 'purple', 'orange']} // Android
          progressViewOffset={50} // Android e iOS
          style={{backgroundColor: 'red'}} // iOS
          tintColor={theme.colors.primary} // iOS
          title="Recargando..." // iOS
          titleColor={theme.colors.primary} // iOS
        />
      }>
      <View
        style={{
          ...styles.container,
          marginTop: insets.top + 15,
          marginBottom: insets.bottom + 15,
          marginLeft: insets.left + 15,
          marginRight: insets.right + 15,
        }}>
        <HeaderTitleComponents title="Pull To Refresh Component" />

        <Text
          style={{
            height: 80,
            textAlignVertical: 'center',
            fontSize: 25,
            marginVertical: 60,
            textAlign: 'center',
            color: theme.colors.primary,
          }}>
          {dataState === ''
            ? 'Haz pull hacia abajo para cargar el contenido!'
            : dataState}
        </Text>

        <BackToHomeBtn theme={theme} navigation={navigation} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});
