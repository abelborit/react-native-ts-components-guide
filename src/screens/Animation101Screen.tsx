import React from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigators/StackNavigator';

const initialStateAnimation = {
  initialOpacity: 0,
  finishPosition: 0,
};

interface Animation101ScreenProps
  extends StackScreenProps<RootStackParams, 'Animation101Screen'> {}

export const Animation101Screen = ({navigation}: Animation101ScreenProps) => {
  const {
    opacityAnimated,
    positionAnimated,
    fadeIn,
    fadeOut,
    startMovingPosition,
  } = useAnimation(initialStateAnimation);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.boxElement,
          opacity: opacityAnimated,
          transform: [
            {
              translateY: positionAnimated,
            },
          ],
        }}
      />

      <View style={{flexDirection: 'row', gap: 25}}>
        <Button
          title="FadeIn"
          onPress={() => {
            fadeIn(1, 500);
            startMovingPosition(-100, 500);
          }}
        />

        <Button title="FadeOut" onPress={() => fadeOut(300)} />
      </View>

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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
  },
  boxElement: {
    backgroundColor: '#5856D6',
    width: 200,
    height: 200,
    borderRadius: 20,
  },
});
