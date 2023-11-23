import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useRef} from 'react';
import {Animated, PanResponder, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BackToHomeBtn} from '../components/BackToHomeBtn';
import {HeaderTitleComponents} from '../components/HeaderTitleComponents';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {RootStackParams} from '../navigators/StackNavigator';

interface Animation102ScreenProps
  extends StackScreenProps<RootStackParams, 'Animation102Screen'> {}

export const Animation102Screen = ({navigation}: Animation102ScreenProps) => {
  const {theme} = useContext(ThemeContext);
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
        <Text style={{fontSize: 20, color: theme.colors.text}}>
          Move the box to anything side!
        </Text>

        <Animated.View
          {...panResponder.panHandlers}
          // style={[pan.getLayout(), styles.boxElement]}
          style={[
            {transform: [{translateX: pan.x}, {translateY: pan.y}]},
            styles.boxElement,
          ]}
        />

        <BackToHomeBtn theme={theme} navigation={navigation} />
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
