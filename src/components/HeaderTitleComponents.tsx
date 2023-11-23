import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface HeaderTitleComponentsProps {
  title: string;
}

export const HeaderTitleComponents = ({title}: HeaderTitleComponentsProps) => {
  const {theme} = useContext(ThemeContext);

  return (
    <View
      style={{
        ...styles.headerContainer,
        backgroundColor: theme.colors.background,
      }}>
      <Text style={{...styles.headerText, color: theme.colors.text}}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingBottom: 16,
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
});
