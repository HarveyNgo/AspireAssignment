import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from 'src/common';
import Styles from '@common/styles';

export interface ContainerProps {
  children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    paddingHorizontal: Styles.Spacing.normal,
  },
});

export default Container;
