import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

interface useAnimationInterface {
  initialOpacity?: number;
  finishPosition?: number;
}

export const useAnimation = ({
  initialOpacity = 0,
  finishPosition = 0,
}: useAnimationInterface) => {
  const opacityAnimated = useRef(new Animated.Value(initialOpacity)).current;
  const positionAnimated = useRef(new Animated.Value(finishPosition)).current;

  const fadeIn = (finishOpacity: number, durationTime: number) => {
    /* Animated.timing() para manejar el tiempo */
    Animated.timing(
      /* valor al cual se estarán cambiando sus valores */
      opacityAnimated,
      {
        /* configurar el efecto */
        toValue: finishOpacity, // a qué valor se quiere llegar
        duration: durationTime, // tiempo en milésimas de segundo 1000ms = 1s
        useNativeDriver: true, // para que la animación sea acelerada por hardware y no por el software y por ende se verá mejor el efecto de la animación
      },
    ).start(() => {
      /* este callback se ejecuta cuando toda la animación termine */
      // console.log('animation finished');
      // fadeOut(); // para que se haga un ciclo
    });
  };

  const fadeOut = (durationTime: number) => {
    Animated.timing(opacityAnimated, {
      toValue: initialOpacity,
      duration: durationTime,
      useNativeDriver: true,
    }).start(() => {
      // console.log('animation finished');
      // fadeIn(); // para que se haga un ciclo
    });
  };

  const startMovingPosition = (
    initialPosition: number,
    durationTime: number,
  ) => {
    /* cuando se llame a la función startMovingPosition el valor del positionAnimated se seteará a 0 */
    positionAnimated.setValue(initialPosition);

    Animated.timing(positionAnimated, {
      toValue: finishPosition, // a qué valor se quiere llegar
      duration: durationTime, // tiempo en milésimas de segundo 1000ms = 1s
      useNativeDriver: true, // para que sea acelerado por hardware y se verá mejor el fecto
      easing: Easing.bounce, // para hacer el efecto de que rebota
    }).start(() => {
      // console.log('animation finished');
    });
  };

  return {
    opacityAnimated,
    positionAnimated,
    fadeIn,
    fadeOut,
    startMovingPosition,
  };
};
