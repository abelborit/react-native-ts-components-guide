import {StackScreenProps} from '@react-navigation/stack';
import React, {useCallback, useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import {RootStackParams} from '../navigators/StackNavigator';
import {HeaderTitleComponents} from '../components/HeaderTitleComponents';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button} from 'react-native';
import {Text} from 'react-native';

interface PullToRefreshScreenProps
  extends StackScreenProps<RootStackParams, 'PullToRefreshScreen'> {}

export const PullToRefreshScreen = ({navigation}: PullToRefreshScreenProps) => {
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
          tintColor={'#fff'} // iOS
          title="Recargando..." // iOS
          titleColor={'#fff'} // iOS
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
            fontSize: 25,
            marginVertical: 60,
            textAlign: 'center',
            color: '#333',
          }}>
          {dataState === ''
            ? 'Haz pull hacia abajo para cargar el contenido!'
            : dataState}
        </Text>

        <Button
          disabled={refreshing} // para que se deshabilite cuando se esté haga el pull to refresh
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
});
