/* crear el provider que es un componente que vamos a utilizar para obtener la información de nuestro context y es quien envolverá al componente más alto para repartir la información a sus hijos. Aquí se va a definir el estado a través de una interface para ir viendo cómo quiero que se vea a futuro la aplicación */
import React, {useEffect, useReducer} from 'react';
import {Theme} from '@react-navigation/native';
import {ThemeReducer} from './ThemeReducer';
import {ThemeContext} from './ThemeContext';
import {/* AppState, Appearance, */ useColorScheme} from 'react-native';

interface ThemeContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

/* aquí es cómo quiero que luzca mi estado inicial que no necesariamente será el mismo que la interface del Context ya que en la función de abajo se crearán funciones (porque se hará uso de los reducers en algunas ocasiones o solo funciones simples sin reducers lo cual se puede eliminar su importación) las cuales serán añadidas al value y ahí ese value tiene que satisfacer todo lo que se solicita en la interface del Context */
export interface ThemeContextStateInterface extends Theme {
  currentTheme: 'light' | 'dark';
  colorsExtra: {
    secondary: string;
    btnTxt: string;
    dividerColor: string;
    iconsColor: string;
    whitePure: string;
    darkSemiPure: string;
  };
}

/* lightTheme y darkTheme son como los initial state */
const lightTheme: ThemeContextStateInterface = {
  currentTheme: 'light',
  dark: false,
  colors: {
    primary: '#084F6A',
    background: '#fff',
    card: '#A5BECC',
    text: '#28425B',
    border: '#243A73',
    notification: '#A5BECC',
  },
  colorsExtra: {
    secondary: '#086a49',
    btnTxt: '#fff',
    dividerColor: 'rgba(36, 58, 115, 0.4)',
    iconsColor: '#A27B5C',
    whitePure: '#fff',
    darkSemiPure: '#333',
  },
};

const darkTheme: ThemeContextStateInterface = {
  currentTheme: 'dark',
  dark: true,
  colors: {
    // primary: '#2C3639',
    // background: '#3F4E4F',
    primary: '#D9D9DB',
    background: '#2D2D2D',
    card: '#A27B5C',
    text: '#D9D9DB',
    border: '#D9D9DB',
    notification: '#A27B5C',
  },
  colorsExtra: {
    secondary: '#ababda',
    btnTxt: '#282828',
    dividerColor: 'rgba(220, 215, 201, 0.4)',
    iconsColor: '#A27B5C',
    whitePure: '#fff',
    darkSemiPure: '#333',
  },
};

export const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
  /* hook para seleccionar el them que tiene el usuario en su dispositivo */
  const colorScheme = useColorScheme();

  const [themeState, dispatch] = useReducer(
    ThemeReducer,
    colorScheme === 'dark' ? darkTheme : lightTheme,
    // Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme,
  );

  const setLightTheme = () => {
    dispatch({type: 'set_light_theme', payload: lightTheme});
    console.log('light theme');
  };

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme', payload: darkTheme});
    console.log('dark theme');
  };

  /* efecto para seleccionar el them que tiene el usuario en su dispositivo, cada vez que cambie el colorScheme entonces hará esta validación para cambiar el tema de la aplicación */
  useEffect(() => {
    colorScheme === 'dark' ? setDarkTheme() : setLightTheme();
  }, [colorScheme]);

  /* OTRA FORMA */
  /* saber el estado de la aplicación, si está activa, si está en el background (o sea como en segundo plano), etc... */
  // useEffect(() => {
  //   AppState.addEventListener('change', status => {
  //     // console.log({status});
  //     if (status === 'active') {
  //       Appearance.getColorScheme() === 'dark'
  //         ? setDarkTheme()
  //         : setLightTheme();
  //     }
  //   });
  // }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme: themeState,
        setDarkTheme,
        setLightTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
