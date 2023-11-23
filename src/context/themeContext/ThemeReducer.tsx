/* la idea de un reducer es una función que recibe el estado y retorna un objeto del mismo tipo del estado y también recibe acciones y estas acciones nos sirven para determinar el nuevo estado. Este reducer regresará o retornará algo de tipo ThemeContextInitialStateInterface creado en su provider */
import {ThemeContextStateInterface} from './ThemeProvider';

/* se usa un type y no una interface por preferencia ya que con type para las acciones sabemos que estas no se van a extender, es algo rígido */
type ReducerActions =
  | {type: 'set_light_theme'; payload: ThemeContextStateInterface}
  | {type: 'set_dark_theme'; payload: ThemeContextStateInterface};

export const ThemeReducer = (
  state: ThemeContextStateInterface,
  action: ReducerActions,
): ThemeContextStateInterface => {
  switch (action.type) {
    case 'set_light_theme':
      return {
        ...state,
        ...action.payload, // desestructurar el light theme
      };

    case 'set_dark_theme':
      return {
        ...state,
        ...action.payload, // desestructurar el dark theme
      };

    default:
      return state;
  }
};
