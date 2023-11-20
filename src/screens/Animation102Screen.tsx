import React, {useRef} from 'react';
import {
  Animated,
  Button,
  PanResponder,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigators/StackNavigator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HeaderTitleComponents} from '../components/HeaderTitleComponents';

interface Animation102ScreenProps
  extends StackScreenProps<RootStackParams, 'Animation102Screen'> {}

export const Animation102Screen = ({navigation}: Animation102ScreenProps) => {
  const insets = useSafeAreaInsets();
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,

    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      {
        useNativeDriver: false, // se coloca en false ya que en treu aparentemente, para versiones recientes de React Native, el PanResponder no funciona muy bien con el useNativeDriver en true, por lo que conviene desactivarlo
      },
    ),

    /* cuando la persona suelta la animación */
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {
          toValue: {x: 0, y: 0}, // Back to zero
          // useNativeDriver: false, // se coloca en false ya que en treu aparentemente, para versiones recientes de React Native, el PanResponder no funciona muy bien con el useNativeDriver en true, por lo que conviene desactivarlo
          useNativeDriver: true, // se puede colocar en true siempre y cuando se haga el cambio abajo en el style={[]}
        },
      ).start();
    },
  });

  return (
    <View
      style={{
        ...styles.container,
        marginTop: insets.top + 15,
        marginBottom: insets.bottom + 15,
        marginLeft: insets.left + 15,
        marginRight: insets.right + 15,
      }}>
      <HeaderTitleComponents title="Animated Component 2" />

      <View style={styles.containerBox}>
        <Text style={{fontSize: 20}}>Move the box to anything side!</Text>

        <Animated.View
          {...panResponder.panHandlers}
          // style={[pan.getLayout(), styles.boxElement]}
          style={[
            {transform: [{translateX: pan.x}, {translateY: pan.y}]},
            styles.boxElement,
          ]}
        />

        <Button
          color={'#d00'}
          title="Back to Home"
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
  },
  boxElement: {
    backgroundColor: '#61dafb',
    width: 200,
    height: 200,
    borderRadius: 20,
  },
});
