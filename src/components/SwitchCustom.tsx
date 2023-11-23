import React, {useContext, useState} from 'react';
import {Platform, /* StyleSheet, */ Switch} from 'react-native';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface SwitchCustomProps {
  isOn: boolean;
  onChange: (isEnable: boolean) => void;
}

export const SwitchCustom = ({isOn, onChange}: SwitchCustomProps) => {
  const {theme} = useContext(ThemeContext);
  /* se puede mantener el estado del switch aquí dentro o sino manejarlo desde afuera. En este caso se trabajará de ambas formas para mantener el estado interno de este componente pero que también pueda ser controlado desde el exterior */
  const [isEnabled, setIsEnabled] = useState(isOn);

  const handleToggleSwitch = () => {
    setIsEnabled(!isEnabled);

    /* decirle también al padre que el estado del switch cambió de true a false o viceversa */
    onChange(!isEnabled);
  };

  return (
    <>
      {/* el componente Switch en dispositivos Android e iOS aparecen en lugares distintos, en Android aparece a la derecha y en iOS en la izquierda */}
      <Switch
        trackColor={{false: '#c3c3c6', true: theme.colorsExtra.iconsColor}} // si se comenta, en Android se mira un poco feo y no se diferencia bien el switch
        thumbColor={
          Platform.OS === 'android'
            ? isEnabled
              ? theme.colors.primary
              : theme.colorsExtra.whitePure
            : ''
        } // color de la bolita, si se comenta, en iOS se mira con su color por defecto que es blanco pero en Android no aparecería, entonces se hará una condición para el sistema operativo. En iOS se coloca string vacío entonces aparecerá un blanco
        ios_backgroundColor="#c3c3c6" // si se comenta entonces aparece el tono por defecto que es un gris bien claro, pero se puede colocar esta opción y darle un color custom
        onValueChange={handleToggleSwitch}
        value={isEnabled}
      />
    </>
  );
};

// const styles = StyleSheet.create({
//   container: {},
// });
