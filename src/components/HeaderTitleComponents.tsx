import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface HeaderTitleComponentsProps {
  title: string;
}

export const HeaderTitleComponents = ({title}: HeaderTitleComponentsProps) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 16,
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#222',
  },
});
