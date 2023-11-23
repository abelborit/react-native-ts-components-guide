/* el context es quien va a exponer los datos a los demás componentes */
import {createContext} from 'react';
import {ThemeContextStateInterface} from './ThemeProvider';

/* aquí es donde se coloca qué es lo que quiero distribuir en el value del Provider, aquí deberían estar todos los métodos, estados, etc... */
interface ThemeContextProps {
  theme: ThemeContextStateInterface;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);
