import {RootStackParams} from '../navigators/StackNavigator';

export interface MenuItemInterface {
  name: string;
  icon: string;
  componentName: keyof RootStackParams; // para que sea una llave según RootStackParams
}
